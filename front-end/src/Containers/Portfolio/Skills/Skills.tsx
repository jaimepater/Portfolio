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


const Skills = observer(() => {
  const [ref, isVisible] = useInView({
    threshold: 1,
    unobserveOnEnter: true
  });

  const {
    profileStore: { skillTitle, skillsList }
  } = useStores();

  return (
    <div ref={ref}>
      {isVisible && skillTitle ? (
        <BannerSkills text={skillTitle}  />
      ) : null}
    </div>
  );
});

export default Skills;
