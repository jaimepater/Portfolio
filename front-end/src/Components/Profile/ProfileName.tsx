import * as React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { ReactNode } from 'react';
import Colombia from '../Colombia';
import H1 from '../H1';

export const Name = styled.div`
  font-family: 'Roboto';
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.theme.palette.gray1};
`;

const Flag = styled.div`
  height: 30px;
  width: 40px;
`;

interface ProfileNameProps {
  name: string;
  flag?: ReactNode;
}

const ProfileName = ({ name, flag }: ProfileNameProps) => (
  <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
    {!flag ? (
      <Grid item>
        <Flag>
          <Colombia />
        </Flag>
      </Grid>
    ) : (
      flag
    )}
    <Grid item>
      <Name>
        <H1>{name}</H1>
      </Name>
    </Grid>
  </Grid>
);

export default ProfileName;
