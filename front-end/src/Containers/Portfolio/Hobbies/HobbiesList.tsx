import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Hobie } from '../../../Definitions/definitions';
import HobbiesItem from './HobbiesItem';

interface HobbiesListProps {
  list: Array<Hobie>;
}
const HobbiesList = ({ list }: HobbiesListProps) => {
  return (
    <Container>
      <Grid container direction="row" spacing={3} justify="center">
        {list &&
          list.map(hobbies => (
            <Grid key={hobbies.title} item xs={12} sm={6} lg={3}>
              <HobbiesItem hobbies={hobbies} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default HobbiesList;
