import * as React from 'react';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import styled from 'styled-components';
import useStores from '../../../Commons/Hooks/Stores';
import Profile from '../../../Components/Profile/Profile';
import { StyledCard } from '../../../Components/Profile/ProfileCard';
import H1 from '../../../Components/H1';
import H2 from '../../../Components/H2';
import Logo from '../../../Components/Logo';

const StyledProfile = styled.div`
  padding-top: 64px;
  & .avatarContainer {
    display: none;
  }
  ${StyledCard} {
    margin-top: 0;
  }
  ${H1}, ${H2} {
    color: ${props => props.theme.palette.white};
  }
  & .MuiCard-root {
    background-color: transparent;
    box-shadow: none;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f51b5;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;

const ProfileSolutions = observer(() => {
  const { solutionStore } = useStores();
  useEffect(() => {
    solutionStore.getProfileData();
  }, [solutionStore]);

  const { name, profiles } = solutionStore;
  const profile = {
    name,
    flag: (
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>
    ),
    list: profiles,
  };
  return (
    <StyledProfile>
      <Profile {...profile} />
    </StyledProfile>
  );
});

export default ProfileSolutions;
