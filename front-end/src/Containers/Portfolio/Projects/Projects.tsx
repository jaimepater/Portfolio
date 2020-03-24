/**
 *
 * Projects
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useSpring, animated as a } from 'react-spring';
import { useState } from 'react';
import ProjectList from './ProjectList';
import BannerParellax from './BannerParellax';
import useStores from '../../../Commons/Hooks/Stores';

interface ProjectsProps {}
const Projects = observer(() => {
  const {
    profileStore: { projectsTitle, projectsList }
  } = useStores();
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const renderCardOne = () => (
    <a.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,

        // @ts-ignore

        zIndex: !flipped ? 10 : 1,
        opacity: opacity.interpolate((o: any) => 1 - o),

        transform
      }}
    >
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Jaime paternina
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => set(state => !state)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </a.div>
  );

  const renderCardOVivi = () => (
    <a.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        opacity,
        zIndex: flipped ? 10 : 1,
        transform: transform.interpolate(t => `${t} rotateX(180deg)`)
      }}
    >
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            viviam cuesta te amo
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => set(state => !state)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </a.div>
  );
  return (
    <div>
      {projectsTitle && <BannerParellax title={projectsTitle} height={391} />}
      {projectsList ? <ProjectList projects={projectsList} /> : null}
    </div>
  );
});

export default Projects;
