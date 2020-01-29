/**
 *
 * BannerSkills
 *
 */
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card, Container } from '@material-ui/core';
import { useInView } from 'react-hook-inview';
import styled from 'styled-components';
import H2 from '../../../Components/H2';

const StyledContainer = styled(Container)`
  margin: 40px auto;
`;
const StyledText = styled(H2)`
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSize.xl};
  display: inline;
  font-family: 'typewriter';
  border-right: 0.08em solid ${props => props.theme.palette.white};
`;

interface BannerSkillsProps {
  text: string;
}
const BannerSkills = ({ text: fullText }: BannerSkillsProps) => {
  const [txt, setTxt] = useState('');
  const tick = () => {
    const delta = 400 - Math.random() * 100
    if (txt !== fullText) {
      setTimeout(() => {
        setTxt(fullText.substring(0, txt.length + 1));
      }, delta);
    }
  };

  useEffect(() => {
    tick();
  }, [txt, txt !== fullText]);

  return (
    <StyledContainer>
      <StyledText>{txt}</StyledText>
    </StyledContainer>
  );
};

export default BannerSkills;
