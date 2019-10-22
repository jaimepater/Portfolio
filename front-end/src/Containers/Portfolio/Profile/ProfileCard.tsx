// @flow
import * as React from 'react';
import {
  Card, CardActionArea, CardContent, Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { IProfileStore } from '../../../Commons/Stores/ProfileStore';
import ProfileName from './ProfileName';


const StyledCard = styled(Card)`
  margin-top: -50px;
`;

const StyledCardContent = styled(CardContent)`
  padding-top: 55px;
`;

interface CardProps {
  profileStore? : IProfileStore
}
const ProfileCard: React.FC<CardProps> = ({ profileStore } : CardProps) => {
  useEffect(() => {
    console.log('hiiiiiii');
    profileStore && profileStore.getProfileData();
    console.log(profileStore && profileStore.profileData.name);
  }, [profileStore]);


  return (
    <StyledCard>
      <StyledCardContent>
        <div>
          <ProfileName name={profileStore && profileStore.profileData.name} />
        </div>
      </StyledCardContent>
    </StyledCard>
  );
};

export default inject('profileStore')(observer(ProfileCard));
