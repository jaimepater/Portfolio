/**
 *
 * Experience
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import useStores from "../../../Commons/Hooks/Stores";
import BannerParellax from "./BannerParellax";
import ExperienceList from "./ExperienceList/ExperienceList";
import {IExperienceList} from "../../../Commons/Stores/ProfileStore";

interface ExperienceProps {

}
const Experience =   observer( () => {
  const { profileStore : { experienceTitle , experienceList} } =  useStores();
  const title = experienceTitle as string;
  const list  =  experienceList as Array<IExperienceList>;

  return ( <div>
    <BannerParellax title={title} height={391} />
    <ExperienceList experienceList={list}/>
  </div>);
}
);

export default Experience;