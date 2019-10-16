import * as React from 'react';
import styled from 'styled-components';
import imageJaime from '../assets/Jaime.png';


const Avatar = styled.div`
  background-image: url(${imageJaime});
  border-radius: 50%;  
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
`;

export default Avatar;
