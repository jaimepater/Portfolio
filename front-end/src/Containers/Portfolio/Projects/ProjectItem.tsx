/**
 *
 * ProjectItem
 *
 */
import * as React from 'react';
import { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import styled from 'styled-components';
import { IProject } from '../../../Commons/Stores/ProfileStore';

interface ProjectItemProps {
  description: any;
  details: any;
}

export const ContainerFlippedCard = styled.div`
  position: relative;
`;
const ProjectItem = ({ description, details }: ProjectItemProps) => {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped(state => !state);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <ContainerFlippedCard>
      <a.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: !flipped ? 10 : 1,
          opacity: opacity.interpolate((o: any) => 1 - o),
          transform
        }}
      >
        {React.cloneElement(description, { toggle })}
      </a.div>
      <a.div
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          opacity,
          width: '100%',
          zIndex: flipped ? 10 : 1,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        {React.cloneElement(details, { toggle })}
      </a.div>
    </ContainerFlippedCard>
  );
};

export default ProjectItem;
