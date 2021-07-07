import React, { ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface BulletedProps {
  text: ReactNode;
  icon: ReactNode;
  color: string;
}

const BulletedContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.div`
  margin: 3%;
  line-height: 0;
  color: ${(props: IStyledIcon) => props.color};
`;

interface IStyledIcon {
  theme: DefaultTheme;
  color: string;
}

const StyledText = styled.div`
  font-size: 10px;
`;

const Bulleted = ({ text, icon, color }: BulletedProps) => {
  return (
    <BulletedContainer>
      <StyledIcon color={color}>{icon}</StyledIcon>
      <StyledText>{text}</StyledText>
    </BulletedContainer>
  );
};

export default Bulleted;
