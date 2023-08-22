import React from 'react';
import styled from 'styled-components';

const StyledText = styled.h3`
  font-size: 5em;
  padding-left: 24px;
  position: absolute;
  white-space: pre;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
  z-index: 2;
  width: min-content;
  margin: 0 auto;
  text-shadow: 0 5px 30px #18191a;
  color: ${props => props.theme.palette.white};
  font-weight: 700;
`;

interface BannerWithAnimationProps {
  text: string;
}

const StyledSvg = styled.svg`
  width: 100%;
  translateY(-50%);
  top: 0;
  left: -48%;
  position: absolute;
  height: 60vw;
  max-height: 500px;
  z-index: 1;
`;

const StyledPath1 = styled.path`
  transform-origin: center center;
  transform: rotate(120deg);
  stroke-width: 0.058;
  animation: bganimation 20s linear infinite;
  stroke-dasharray: 0.4236540522651584 1.6946162090606336;
`;

const StyledPath2 = styled.path`
  transform-origin: center center;
  transform: rotate(0deg);
  stroke-width: 0.058;
  animation: bganimation 20s linear infinite;
  stroke-dasharray: 0.4236540522651584 1.6946162090606336;
`;

const StyledPath3 = styled.path`
  transform-origin: center center;
  transform: rotate(240deg);
  stroke-width: 0.058;
  animation: bganimation 20s linear infinite;
  stroke-dasharray: 0.4236540522651584 1.6946162090606336;
`;

const Container = styled.div`
  margin: auto;
  display: block;
  position: relative;
  margin-top: 30px;
  width: 100%;
  max-height: 500px;
  height: 60vw;
  @keyframes bganimation {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -1.270972261060791;
    }
  }
`;

const BannerWithAnimation = ({ text }: BannerWithAnimationProps) => {
  return (
    <Container>
      <StyledText>{text}</StyledText>
      <StyledSvg className="svg_WDAo" viewBox="0 0 1 1">
        <StyledPath1
          d="M0.3,0.5a0.2,0.45 0 1,0 0.4,0a0.2,0.45 0 1,0 -0.4,0"
          fill="none"
          stroke="#3a96c2"
          strokeLinecap="round"
        />
        <StyledPath2
          d="M0.3,0.5a0.2,0.45 0 1,0 0.4,0a0.2,0.45 0 1,0 -0.4,0"
          fill="none"
          stroke="#3a96c2"
          strokeLinecap="round"
          strokeWidth="0.035"
          className="p_ZII8"
        />
        <StyledPath3
          d="M0.3,0.5a0.2,0.45 0 1,0 0.4,0a0.2,0.45 0 1,0 -0.4,0"
          fill="none"
          stroke="#3a96c2"
          strokeLinecap="round"
          strokeWidth="0.035"
        />
      </StyledSvg>
    </Container>
  );
};

export default BannerWithAnimation;
