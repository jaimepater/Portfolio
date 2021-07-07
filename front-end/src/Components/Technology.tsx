import * as React from 'react';
import { Chip } from '@material-ui/core';
import styled, { DefaultTheme } from 'styled-components';

interface LogoProps {
  theme: DefaultTheme;
  image: string;
}

const Logo = styled.div`
  background-image: ${(props: LogoProps) => `url(${props.image})`};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-size: 100% 100%;
`;

interface TechnologyProps {
  text: string;
  icon: string;
}

const Technology = ({ text, icon }: TechnologyProps) => {
  return <Chip label={text} avatar={<Logo image={icon} />} />;
};

export default Technology;
