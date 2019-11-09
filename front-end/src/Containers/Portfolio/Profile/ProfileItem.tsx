import { default as React } from 'react';
import styled, { DefaultTheme, keyframes } from 'styled-components';
import H2 from '../../../Components/H2';

const fadeUp = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


// Create the keyframes
const animation = keyframes`
 from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  20% {
   opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  70% {
   opacity: 0.5;
  }
  to{
  opacity: 0;
  }
`;
export const TextProfile = styled(H2)`
 font-family: 'Roboto';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
      line-height: normal;
  animation: ${animation} ${(props: ITextProfile) => props.time} linear;
  animation-iteration-count: initial;
  letter-spacing: normal;
  text-align: center;
  margin-top: 0;
  color: ${props => props.theme.palette.gray1};
`;

interface IProfileItemProps {
  profile: string,
  time: number,
}

interface ITextProfile {
  theme: DefaultTheme,
  time: string,
}

const ProfileItem = ({ profile, time } : IProfileItemProps) => {
  const animationTime = `${time / 1000}s`;
  return (<TextProfile time={animationTime}>{profile}</TextProfile>);
};


export default ProfileItem;
