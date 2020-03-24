/**
 *
 * ProjectList
 *
 */
import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import { IProject } from '../../../Commons/Stores/ProfileStore';
import ProjectItem from './ProjectItem';
import ProjectSummary from './ProjectSummary';
import ProjectDetails from './ProjectDetails';

interface ProjectListProps {
  projects: Array<IProject>;
}
const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        {projects.map(project => (
          <Grid item xs={3}>
            <ProjectItem
              description={<ProjectSummary project={project}  descriptionLength={80}/>}
              details={<ProjectDetails project={project} />}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectList;
