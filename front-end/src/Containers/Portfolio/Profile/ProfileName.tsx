import * as React from 'react';
import styled from 'styled-components';
import H1 from '../../../Componets/H1';
import Colombia from '../../../Componets/Colombia';

const ProfileNameContainer = styled.div`
display: flex;
align-content: center;
text-align: center;
align-items: center;
justify-content: center;
`;

const Name = styled.div`

`;

const Flag = styled.div`
    height: 20px;
    width: 30px;
    margin-left: 5px;
`;

interface IProfileNameProps {
  name: string
}

const ProfileName = ({ name } : IProfileNameProps) => (
  <ProfileNameContainer>
    <Name>
      <H1>
        {name}
      </H1>
    </Name>
    <Flag>
      <Colombia />
    </Flag>
  </ProfileNameContainer>
);

export default ProfileName;
