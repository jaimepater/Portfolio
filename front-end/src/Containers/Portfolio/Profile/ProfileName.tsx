import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Grid } from '@material-ui/core';
import H1 from '../../../Components/H1';
import Colombia from '../../../Components/Colombia';



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


interface IProfileNameProps {
  name: string
}

const ProfileName = ({ name } : IProfileNameProps) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    spacing={1}
  >
    <Grid item>
      <Flag>
        <Colombia />
      </Flag>
    </Grid>
    <Grid item>
      <Name>
        <H1>
          {name}
        </H1>
      </Name>
    </Grid>
  </Grid>
);

export default ProfileName;
