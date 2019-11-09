/**
 *
 * Experience
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import useStores from "../../../Commons/Hooks/Stores";
import BannerParellax from "./BannerParellax";

interface ExperienceProps {

}
const Experience =   observer( () => {
  const { profileStore : { experienceTitle} } =  useStores();
  const title = experienceTitle as string;
  return ( <div><BannerParellax title={title} height={391} /></div>);
}
);

export default Experience;