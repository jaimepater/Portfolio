import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../../Components/Logo';
import wave from '../../assets/Images/wave.png';

const waveAnimation = {
  animate: {
    backgroundPositionX: '0px',
  },
  initial: {
    backgroundPositionX: '1000px',
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'linear',
  },
};

const waveAnimationReverse = {
  animate: {
    backgroundPositionX: 0,
  },
  initial: {
    backgroundPositionX: '-1000px',
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'linear',
  },
};

const FooterContainer = styled(motion.footer)`
  position: relative;
  background: #3f51b5;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface WaveProps {
  opacity?: number;
  zIndex?: number;
  button?: string;
}

const Wave = styled(motion.div)<WaveProps>`
  position: absolute;
  opacity: ${props => props.opacity || 1};
  z-index: ${props => props.zIndex || 1};
  z-index: ${props => props.zIndex || 1};
  top: -100px;
  bottom: ${props => props.button && '0'}
  left: 0;
  width: 100%;
  height: 100px;
  background: url('${wave}');
  background-size: 1000px 100px;
`;

const FooterText = styled.div`
  color: #fff;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const SolutionsFooter = () => {
  return (
    <FooterContainer>
      <Wave {...waveAnimation} zIndex={2} />
      <Wave {...waveAnimationReverse} zIndex={1} opacity={0.5} />
      <Wave
        {...{ ...waveAnimation, transition: { ...waveAnimation.transition, duration: 3 } }}
        zIndex={2}
        opacity={0.2}
      />
      <Wave
        {...{
          ...waveAnimationReverse,
          transition: { ...waveAnimationReverse.transition, duration: 3 },
        }}
        zIndex={1}
        opacity={0.7}
      />
      <FooterText>
        <Logo /> JP Dev Solutions
      </FooterText>
    </FooterContainer>
  );
};

export default SolutionsFooter;
