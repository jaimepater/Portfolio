// @flow
import * as React from 'react';
import {
  Card, CardActionArea, CardContent, Typography,
} from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin-top: -50px;
`;

const StyledCardContent = styled(CardContent)`
  padding-top: 55px;
`;


const ProfileCard = () => (
  <StyledCard>
    <CardActionArea>
      <StyledCardContent>
        <Typography gutterBottom variant="h5" component="h2">
                        Lizard
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
        </Typography>
      </StyledCardContent>
    </CardActionArea>
  </StyledCard>
);

export default ProfileCard;
