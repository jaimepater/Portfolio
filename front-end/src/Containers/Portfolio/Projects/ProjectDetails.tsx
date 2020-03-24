/**
 *
 * ProjectDetails
 *
 */
import * as React from 'react';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { IProject } from '../../../Commons/Stores/ProfileStore';

interface ProjectDetailsProps {
  project: IProject;
  toggle?: any;
}
const ProjectDetails = ({ project, toggle }: ProjectDetailsProps) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          viviam cuesta te amo
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => toggle && toggle()}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectDetails;
