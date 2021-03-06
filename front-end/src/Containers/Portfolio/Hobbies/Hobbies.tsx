import * as React from 'react';
import { observer } from 'mobx-react';
import useStores from '../../../Commons/Hooks/Stores';
import HobbiesBanner from './HobbiesBanner/HobbiesBanner';
import HobbiesList from './HobbiesList';

const Hobbies = observer(() => {
  const {
    profileStore: { hobbiesList },
  } = useStores();

  return (
    <>
      <HobbiesBanner />
      {hobbiesList && <HobbiesList list={hobbiesList} />}
    </>
  );
});

export default Hobbies;
