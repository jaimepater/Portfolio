import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { Skill } from '../../../Definitions/definitions';
import SkillsItem from './SkillsItem';

interface SkillsListProps {
  skillsList: Array<Skill>;
}

const StyledContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const SkillsList = ({ skillsList }: SkillsListProps) => {
  return (
    <Container fixed>
      <StyledContainer>
        <Grid container spacing={8} direction="row" justify="center" alignItems="center">
          {skillsList.map((skill, index) => (
            <Grid key={skill.id} item xs={6} sm={4} md={3} lg={2}>
              <SkillsItem skill={skill} index={index} />
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </Container>
  );
};

export default SkillsList;
