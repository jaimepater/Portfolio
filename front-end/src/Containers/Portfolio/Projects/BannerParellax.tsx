import * as React from 'react';
import styled from 'styled-components';
import image from '../../../assets/Images/Experience.png';

export const ParallaxContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  background-image: url(${image});
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.span`
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSize.xl};
  position: relative;
  z-index: 1;
  align-self: center;
  margin: auto;
`;

interface BannerParallaxProps {
  title: string;
}

const BannerParallax = ({ title }: BannerParallaxProps) => {
  return (
    <ParallaxContainer>
      <Title>{title}</Title>
    </ParallaxContainer>
  );
};

export default BannerParallax;
