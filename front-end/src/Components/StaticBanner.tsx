import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import image from '../assets/Images/circuit.png';

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  height: ${(props: IContainer) => `${props.height}px`};
`;

interface IContainer {
  theme: DefaultTheme;
  height: number;
}

interface StaticBannerProps {
  text: string;
  height: number;
}

const Img = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props: IImg) => `url(${props.img})`};
`;

interface IImg {
  theme: DefaultTheme;
  img: string;
}
const Text = styled.span`
  text-align: center;
  font-family: Roboto;
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSize.xl};
`;

const StaticBanner = ({ text, height }: StaticBannerProps) => {
  return (
    <Container height={height}>
      <Img img={image}>
        <Text>{text}</Text>
      </Img>
    </Container>
  );
};

export default StaticBanner;
