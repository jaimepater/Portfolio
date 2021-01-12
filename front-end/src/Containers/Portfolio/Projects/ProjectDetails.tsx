/**
 *
 * ProjectDetails
 *
 */
import * as React from 'react';
import { CardContent, CardHeader, Collapse, Fab } from '@material-ui/core';

import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import KeyboardArrowLeftSharpIcon from '@material-ui/icons/KeyboardArrowLeftSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';
import { IProject } from '../../../Commons/Stores/ProfileStore';
import Technologies from '../../../Components/Technologies';

interface ProjectDetailsProps {
  project: IProject;
  toggle?: any;
}

const Description = styled.span`
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: normal;
  font-family: Roboto;
  color: ${props => props.theme.palette.gray1};
`;

const StyledCardHeader = styled(CardHeader)`
  .MuiCardHeader-content {
    display: none;
  }
`;

const StyledIconButton = styled(IconButton)`
  margin-left: auto;
  transform: ${(props: IIconButton) =>
    props.expanded === 'true' ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

interface IIconButton {
  expanded: string;
}

const ProjectDetails = ({ project, toggle }: ProjectDetailsProps) => {
  const handleToggle = () => {
    toggle && toggle();
  };
  const [expanded, setExpand] = useState(false);

  const toggleExpand = () => setExpand(state => !state);
  return (
    <Card>
      <StyledCardHeader
        action={
          <Fab color="primary" aria-label="add" size="small" onClick={handleToggle}>
            <KeyboardArrowLeftSharpIcon />
          </Fab>
        }
      />
      <CardContent>
        <Description>{project.description}</Description>
      </CardContent>
      <CardActions>
        <StyledIconButton
          aria-label="show more"
          onClick={toggleExpand}
          expanded={expanded.toString()}
        >
          <ExpandMoreIcon />
        </StyledIconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Technologies technologies={project.technologies} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectDetails;
