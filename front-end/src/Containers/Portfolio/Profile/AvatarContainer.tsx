import * as React from 'react';
import styled from 'styled-components';
import Avatar from '../../../Components/Avatar';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const AvatarBorder = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  border-radius: 50%;
  padding: 7px;
  background-color:  ${props => props.theme.palette.white};
  border: 3px solid   ${props => props.theme.palette.blue1};
  z-index: 2;
`;

const AvatarContainer = () => (
  <Container>
    <AvatarBorder>
      <Avatar />
    </AvatarBorder>
  </Container>
);

export default AvatarContainer;
