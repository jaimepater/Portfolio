import React from 'react';
import styled from 'styled-components';
import AnimatedLogo from '../../../Components/AnimatedLogo';

interface ContactUSBannerProps {
  title?: string;
}

const Container = styled.div`
  width: 100%;
  position: relative;
  min-height: 200px;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: -106px;
  left: 78px;
  z-index: 2;
`;

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

const ContactUSBanner = ({ title }: ContactUSBannerProps) => {
  return (
    <Container>
      <StyledText>{title}</StyledText>
      <LogoContainer>
        <AnimatedLogo width={50} height={50} />
      </LogoContainer>
    </Container>
  );
};

export default ContactUSBanner;
