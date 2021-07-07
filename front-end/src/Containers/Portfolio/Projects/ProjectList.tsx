import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Project } from '../../../Definitions/definitions';
import ProjectItem from './ProjectItem';
import ProjectSummary from './ProjectSummary';
import ProjectDetails from './ProjectDetails';

interface ProjectListProps {
  projects: Array<Project>;
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <Container>
      <Grid container direction="row" spacing={3} justify="center">
        {projects.map(project => (
          <Grid key={project.title} item xs={12} sm={6} md={4} lg={3}>
            <ProjectItem
              description={<ProjectSummary project={project} descriptionLength={80} />}
              details={<ProjectDetails project={project} />}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectList;
