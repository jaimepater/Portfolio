// @flow
import * as React from 'react';
import {
  Card, CardContent,
} from '@material-ui/core';
import styled from 'styled-components';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import ProfileName from './ProfileName';
import ProfileList from "./ProfileList";
import useStores from "../../../Commons/Hooks/Stores";


const StyledCard = styled(Card)`
  margin-top: -50px;
`;

const StyledCardContent = styled(CardContent)`
  padding-top: 55px;
`;

interface CardProps {

}
const ProfileCard = observer(() => {
  const { profileStore } =  useStores();
  useEffect(() => {
    profileStore.getProfileData();
  }, [profileStore]);


  return (
    <StyledCard>
      <StyledCardContent>
        <div>
          <ProfileName name={profileStore.fullName} />
          <ProfileList profiles={profileStore.profiles || []} time={5000} />
        </div>
      </StyledCardContent>
    </StyledCard>
  );
});

export default ProfileCard;
