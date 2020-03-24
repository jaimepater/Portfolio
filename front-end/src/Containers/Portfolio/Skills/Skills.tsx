/**
 *
 * Skills
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import { useInView } from 'react-hook-inview';
import useStores from '../../../Commons/Hooks/Stores';
import BannerSkills from './BannerSkills';
import SkillsList from './SkillsList';

const Skills = observer(() => {
  const [ref, isVisible] = useInView({
    threshold: 1,
    unobserveOnEnter: true
  });

  const {
    profileStore: { skillTitle, skillsList }
  } = useStores();

  console.log(isVisible);

  return (
    <div ref={ref}>
      {isVisible && skillTitle ? <BannerSkills text={skillTitle} /> : null}
      {isVisible && skillsList ? <SkillsList skillsList={skillsList} /> : null}
    </div>
  );
});

export default Skills;
