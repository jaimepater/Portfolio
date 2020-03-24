/**
 *
 * SkillsList
 *
 */
import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { ISkill } from '../../../Commons/Stores/ProfileStore';
import SkillsItem from './SkillsItem';

interface SkillsListProps {
  skillsList: Array<ISkill>;
}

const SkillsList = ({ skillsList }: SkillsListProps) => {
  return (
    <Container fixed>
      <Grid
        container
        spacing={8}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {skillsList.map((skill, index) => (
          <Grid item xs={12} sm={2}>
            <SkillsItem skill={skill} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsList;
