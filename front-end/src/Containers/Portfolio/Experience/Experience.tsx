import * as React from 'react';
import { observer } from 'mobx-react';
import useStores from '../../../Commons/Hooks/Stores';
import ExperienceList from './ExperienceList/ExperienceList';
import { Experience as ExperienceDefinition } from '../../../Definitions/definitions';
import StaticBanner from '../../../Components/StaticBanner';

const Experience = observer(() => {
  const {
    profileStore: { experienceTitle, experienceList },
  } = useStores();
  const list = experienceList as Array<ExperienceDefinition>;

  return (
    <div>
      {experienceTitle && <StaticBanner text={experienceTitle} height={391} />}
      <ExperienceList experienceList={list} />
    </div>
  );
});

export default Experience;
