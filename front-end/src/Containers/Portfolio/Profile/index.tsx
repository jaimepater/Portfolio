import * as React from 'react';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import useStores from '../../../Commons/Hooks/Stores';
import Profile from '../../../Components/Profile/Profile';

const ProfilePortfolio = observer(() => {
  const { profileStore } = useStores();
  useEffect(() => {
    profileStore.getProfileData();
  }, [profileStore]);

  const { fullName, profiles } = profileStore;
  const profile = {
    name: fullName,
    showFlag: true,
    list: profiles,
  };
  return <Profile {...profile} />;
});

export default ProfilePortfolio;
