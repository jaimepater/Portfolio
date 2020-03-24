/**
 *
 * Experience
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import useStores from '../../../Commons/Hooks/Stores';
import BannerParellax from '../Projects/BannerParellax';
import ExperienceList from './ExperienceList/ExperienceList';
import { IExperienceList } from '../../../Commons/Stores/ProfileStore';
import StaticBanner from '../../../Components/StaticBanner';
import image from '../../../assets/Images/Experience.png';

interface ExperienceProps {}
const Experience = observer(() => {
  const {
    profileStore: { experienceTitle, experienceList }
  } = useStores();
  const title = experienceTitle as string;
  const list = experienceList as Array<IExperienceList>;

  return (
    <div>
      {experienceTitle && (
        <StaticBanner text={experienceTitle}  height={391} />
      )}
      <ExperienceList experienceList={list} />
    </div>
  );
});

export default Experience;
