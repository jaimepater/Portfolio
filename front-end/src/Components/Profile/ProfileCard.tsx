import * as React from 'react';
import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { ReactNode } from 'react';
import ProfileName from './ProfileName';
import ProfileList from './ProfileList';

export const StyledCard = styled(Card)`
  margin-top: -50px;
`;

const StyledCardContent = styled(CardContent)`
  padding-top: 55px;
`;

interface ProfileCardProps {
  name: string;
  flag?: ReactNode;
  list: string[];
  time?: number;
}

const ProfileCard = observer(({ name, flag, list, time = 5000 }: ProfileCardProps) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <div>
          <ProfileName name={name} flag={flag} />
          <ProfileList profiles={list || []} time={time} />
        </div>
      </StyledCardContent>
    </StyledCard>
  );
});

export default ProfileCard;
