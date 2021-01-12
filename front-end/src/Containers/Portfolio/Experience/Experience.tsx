/**
 *
 * Experience
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import useStores from '../../../Commons/Hooks/Stores';
import ExperienceList from './ExperienceList/ExperienceList';
import { IExperienceList } from '../../../Commons/Stores/ProfileStore';
import StaticBanner from '../../../Components/StaticBanner';

const Experience = observer(() => {
  const {
    profileStore: { experienceTitle, experienceList },
  } = useStores();
  const list = experienceList as Array<IExperienceList>;

  return (
    <div>
      {experienceTitle && <StaticBanner text={experienceTitle} height={391} />}
      <ExperienceList experienceList={list} />
    </div>
  );
});

export default Experience;
