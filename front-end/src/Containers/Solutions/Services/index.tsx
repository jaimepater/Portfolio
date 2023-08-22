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

  const { solutionTitle, solutionList } = solutionStore;

  return (
    <>
      {solutionTitle && <ServicesBanner title={solutionTitle} />}
      <ServicesCards solutionList={solutionList} />
    </>
  );
});

export default Services;
