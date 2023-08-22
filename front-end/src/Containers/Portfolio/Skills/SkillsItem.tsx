import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { LinearProgress } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Skill } from '../../../Definitions/definitions';
import getImage from '../../../Commons/Utils/getImage';

const animation = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

const Logo = styled.div<{ image: string }>`
  background-image: ${props => `url(${props.image})`};
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`;

const ContainerImage = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 50%;
`;

const ContainerSkill = styled(Paper)<{ delay: number }>`
  background-color: transparent;
  padding: 7%;
  opacity: 0;
  animation: ${animation} 1s forwards;
  animation-delay: ${props => `${props.delay}ms`};
`;

const StyledLinearProgress = styled(LinearProgress)`
  background-color: ${props => props.theme.palette.blue3};
  height: 7px;
  border: solid 1px ${props => props.theme.palette.blue3};
  border-radius: 5px;
  & .MuiLinearProgress-barColorPrimary {
    background-color: ${props => props.theme.palette.blue2};
  }
`;

const StyledText = styled.span`
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSize.md};
  margin: 10px;
  display: block;
  text-transform: capitalize;
  font-family: 'Roboto';
`;

interface SkillsItemProps {
  skill: Skill;
  index: number;
}

const SkillsItem = ({ skill: { id, name, score }, index }: SkillsItemProps) => {
  return (
    <ContainerSkill elevation={3} delay={index * 500}>
      <ContainerImage>
        <Logo image={getImage(id)} />
      </ContainerImage>
      <StyledText>{name}</StyledText>
      <StyledLinearProgress variant="determinate" value={Number(score)} />
    </ContainerSkill>
  );
};

export default SkillsItem;
