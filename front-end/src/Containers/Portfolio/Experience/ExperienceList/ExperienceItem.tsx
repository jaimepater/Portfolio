import React, { useCallback, useEffect, useRef } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { useSpring, animated as a, interpolate, config } from 'react-spring';
import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';
import getPosition from '../../../../Commons/Utils/getPosition';
import { Experience } from '../../../../Definitions/definitions';

interface ExperienceItemProps {
  item: Experience;
}

const StyledGridDate = styled(Grid)`
  position: relative;
`;

const StyledGridCard = styled(Grid)`
  position: relative;
`;

export const DateTo = styled.div`
  font-family: 'mexcellent';
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.palette.white};
  white-space: nowrap;
  text-align: left;
`;

const DateFrom = styled(DateTo)`
  margin-left: 45px;
`;

const ExperienceItem = ({ item }: ExperienceItemProps) => {
  const [{ top, left }, set] = useSpring(() => ({ top: 0, left: 0, config: config.molasses }));
  const rootNode = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    if (rootNode.current) {
      const topScroll = rootNode.current.getBoundingClientRect().top as number;
      const positionTop = getPosition(window.innerHeight, -20, 0, 50, topScroll);
      const positionLeft = getPosition(window.innerHeight, -50, 0, 50, topScroll);
      return set({ top: positionTop, left: positionLeft });
    }
    return '';
  }, []);

  const positionY = top.interpolate(y => `${y}%`);
  const positionX = left.interpolate(y => `${y}%`);
  const transform = interpolate(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [top, left],
    // eslint-disable-next-line no-shadow
    (top, left) => `translate(${top * -1}%,${left * -1}%)`,
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <Grid container spacing={3} direction="row" justify="space-between" ref={rootNode}>
      <StyledGridDate item md={8}>
        <Hidden mdDown>
          <a.div style={{ position: 'absolute', top: positionY, left: positionX, transform }}>
            <DateTo>{item.to.display}</DateTo>
            <DateFrom>{item.from.display}</DateFrom>
          </a.div>
        </Hidden>
      </StyledGridDate>
      <StyledGridCard item xs={12} md={4}>
        <ExperienceCard item={item} />
      </StyledGridCard>
    </Grid>
  );
};

export default ExperienceItem;
