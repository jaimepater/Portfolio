import React, { ReactNode } from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import AvatarContainer from './AvatarContainer';
import ProfileCard from './ProfileCard';

const ProfileContainer = styled.div`
  padding-top: 5%;
`;

interface ProfileProps {
  name: string;
  showAvatar?: boolean;
  flag?: ReactNode;
  list: string[];
  time?: number;
}

const Profile = (props: ProfileProps) => (
  <Container fixed>
    <ProfileContainer>
      <AvatarContainer />
      <ProfileCard {...props} />
    </ProfileContainer>
  </Container>
);

export default Profile;
