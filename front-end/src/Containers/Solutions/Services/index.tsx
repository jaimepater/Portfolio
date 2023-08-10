import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import useStores from '../../../Commons/Hooks/Stores';
import ServicesBanner from './ServicesBanner';
import ServicesCards from './ServicesCards';

const Services = observer(() => {
  const { solutionStore } = useStores();
  useEffect(() => {
    solutionStore.getProfileData();
  }, [solutionStore]);

  const { solutionTitle } = solutionStore;
  console.log('solutionTitle', solutionTitle);

  return (
    <>
      {solutionTitle && <ServicesBanner title={solutionTitle} />}
      <ServicesCards />
    </>
  );
});

export default Services;
