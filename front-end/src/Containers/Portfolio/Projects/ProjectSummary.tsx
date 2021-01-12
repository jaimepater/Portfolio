/**
 *
 * ProjectSummary
 *
 */
import * as React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader, CardMedia, Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import styled, { DefaultTheme } from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { IProject } from '../../../Commons/Stores/ProfileStore';
import getImage from '../../../Commons/Utils/getImage';

const Logo = styled.div`
  background-image: ${(props: ILogo) => `url(${props.image})`};
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`;

interface ILogo {
  theme: DefaultTheme;
  image: string;
}

const MainTechImages = styled.div`
  background-color: ${(props: IMainTechImages) => props.color};
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2));
  width: calc(100% + 32px);
  height: 100%;
  margin: 0 -16px 0-16px;
`;

interface IMainTechImages {
  theme: DefaultTheme;
  color: string;
}

const StyledCard = styled(Card)`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const StyledCardActions = styled(CardActions)``;

const StyledGrid = styled(Grid)`
  padding: 5% 0;
`;

const Description = styled.span`
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: normal;
  font-family: Roboto;
  color: ${props => props.theme.palette.gray1};
`;

interface ProjectSummaryProps {
  project: IProject;
  toggle?: any;
  descriptionLength: number;
}

const ProjectSummary = ({ project, toggle, descriptionLength }: ProjectSummaryProps) => {
  const openGitHub = () => {
    window.open(project.github);
  };

  const handleToggle = () => {
    toggle && toggle();
  };

  return (
    <StyledCard>
      <CardHeader
        title={project.title}
        subheader={undefined}
        action={
          <IconButton onClick={openGitHub}>
            <GitHubIcon />
          </IconButton>
        }
      />
      <CardMedia>
        <MainTechImages color={project.color}>
          <Grid container direction="row" justify="center" alignItems="center">
            {project.mainTechnologies.map(tech => (
              <StyledGrid key={tech} item xs={4}>
                <Logo image={getImage(tech)} />
              </StyledGrid>
            ))}
          </Grid>
        </MainTechImages>
      </CardMedia>
      <CardContent>
        <Description>{`${project.description.substring(0, descriptionLength)}...`}</Description>
      </CardContent>
      <StyledCardActions>
        <Button size="small" color="primary" onClick={handleToggle}>
          Learn More
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default ProjectSummary;
