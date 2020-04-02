/**
 *
 * HobbiesList
 *
 */
import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Hobbie } from '../../../Commons/Stores/ProfileStore';
import HobbiesItem from './HobbiesItem';

interface HobbiesListProps {
  list: Array<Hobbie>;
}
const HobbiesList = ({ list }: HobbiesListProps) => {
  return (
    <Container>
      <Grid container direction="row" spacing={3} justify="center">
        {list &&
          list.map(hobbies => (
            <Grid item xs={3}>
              <HobbiesItem hobbies={hobbies} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default HobbiesList;
