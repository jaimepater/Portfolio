import * as React from 'react';
import { useEffect, useState } from 'react';
import ProfileItem from './ProfileItem';

interface ProfileListProps {
  profiles: Array<string>;
  time: number;
}

const ProfileList = ({ profiles, time }: ProfileListProps) => {
  const [profile, setProfile] = useState({ id: 0, name: '' });
  const showProfile = (index: number) => {
    if (!isNaN(index)) {
      setProfile({ name: profiles[index], id: index });
      setTimeout(showProfile.bind(undefined, (index + 1) % profiles.length), time);
    }
  };

  useEffect(() => {
    showProfile(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profiles, profiles.length, time]);

  return <ProfileItem key={profile.id} profile={profile.name} time={time} />;
};

export default ProfileList;
