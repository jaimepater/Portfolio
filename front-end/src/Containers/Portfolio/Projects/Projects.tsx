import * as React from 'react';
import { observer } from 'mobx-react';
import ProjectList from './ProjectList';
import BannerParellax from './BannerParellax';
import useStores from '../../../Commons/Hooks/Stores';

const Projects = observer(() => {
  const {
    profileStore: { projectsTitle, projectsList },
  } = useStores();

  return (
    <div>
      {projectsTitle && <BannerParellax title={projectsTitle} />}
      {projectsList ? <ProjectList projects={projectsList} /> : null}
    </div>
  );
});

export default Projects;
