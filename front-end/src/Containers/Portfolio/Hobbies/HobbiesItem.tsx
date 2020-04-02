/**
 *
 * HobbiesItem
 *
 */
import * as React from 'react';
import { Card, CardContent } from '@material-ui/core';
import styled, { DefaultTheme } from 'styled-components';
import { useSpring } from 'react-spring';
import { Hobbie } from '../../../Commons/Stores/ProfileStore';
import H3 from '../../../Components/H3';
import Bike from '../../../Components/Logos/Bike';
import getLogo from '../../../Commons/Utils/getLogo';
import H2 from '../../../Components/H2';

interface HobbiesItemProps {
  hobbies: Hobbie;
}

const Description = styled.span`
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: normal;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  font-family: Roboto;
  color: ${props => props.theme.palette.gray1};
`;

const StyledCard = styled(Card)`
  position: relative;
  height: 330px;
  &:before {
    content: '';
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background: ${(props: IStyledCard) => props.color};
    clip-path: circle(50% at 80% 20%);
    transition: 0.5s;
    z-index: 4;
  }
  &:hover {
    ${Description} {
      display: block;
      visibility: visible;
      opacity: 1;
    }
    &:before {
      clip-path: circle(70% at 90% -20%);
      height: 40%;
    }
  }
`;

interface IStyledCard {
  theme: DefaultTheme;
  color: string;
}

const Title = styled(H2)`
  margin-top: 0;
  margin-bottom: 16px;
`;

const HobbiesItem = ({ hobbies }: HobbiesItemProps) => {
  const [propsLogo, setLogo] = useSpring(() => ({
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }));

  const activateHover = () => {
    setLogo({
      top: '0%',
      transform: 'translate(-50%, 0%)'
    });
  };

  const deactivateHover = () => {
    setLogo({
      top: '50%',
      transform: 'translate(-50%, -50%)'
    });
  };
  return (
    <StyledCard
      color={hobbies.color}
      onMouseMove={activateHover}
      onMouseLeave={deactivateHover}
    >
      {getLogo(hobbies.logo, {
        left: '50%',
        top: '50%',
        height: '50%',
        style: propsLogo,
        width: '50%',
        position: 'absolute'
      })}
      <CardContent>
        <Title>{hobbies.title}</Title>
        <Description>{hobbies.description}</Description>
      </CardContent>
    </StyledCard>
  );
};

export default HobbiesItem;
