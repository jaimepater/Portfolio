import * as React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import AvatarContainer from './AvatarContainer';
import ProfileCard from './ProfileCard';

const ProfileContainer = styled.div`
  padding-top: 5%;
`;

const Profile = () => (
  <Container fixed>
    <ProfileContainer>
      <AvatarContainer />
      <ProfileCard />
    </ProfileContainer>
  </Container>
);

export default Profile;
