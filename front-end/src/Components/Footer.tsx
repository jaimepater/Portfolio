/**
 *
 * Footer
 *
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import styled, { DefaultTheme } from 'styled-components';
import { Grid, IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useStores from '../Commons/Hooks/Stores';
import Logo from './Logo';
import getLogo from '../Commons/Utils/getLogo';

export const StyledFooter = styled.footer`
  margin-top: 30px;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  color: #fff;
  justify-items: center;
  background-color: #3f51b5;
  min-height: 64px;
  box-shadow: 0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledGrid = styled(Grid)`
  padding: 20px;
`;

export const StyledFindMe = styled.div`
  &:after {
    content: ' |';
  }
`;
export const StyledName = styled.div``;

const StyleIconButton = styled(IconButton)<IStyleIconButton>`
  color: #fff;
`;

interface IStyleIconButton {
  theme: DefaultTheme;
  component: string;
  href: string;
}

const LogoFooter = ({ name }: { name: string }) => (
  <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center">
    <Grid item>
      <Logo />
    </Grid>
    <Grid item>
      <StyledName>{name}</StyledName>
    </Grid>
  </Grid>
);

const FindMeFooter = (props: socialNetworksProps) => (
  <Grid container spacing={1} direction="row" justify="flex-start" alignItems="center">
    <Grid item>
      <StyledFindMe>Find me</StyledFindMe>
    </Grid>
    <Grid item>
      <SocialNetworks {...props} />
    </Grid>
  </Grid>
);

interface socialNetworksProps {
  github: string | undefined;
  mail: string | undefined;
  strava: string | undefined;
  linkedin: string | undefined;
}

const SocialNetworks = ({ github, linkedin, mail, strava }: socialNetworksProps) => (
  <Grid container spacing={0} direction="row" justify="flex-start" alignItems="center">
    <Grid item md={4}>
      <StyleIconButton component="a" size="small" href={github || ''}>
        <GitHubIcon fontSize="small" />
      </StyleIconButton>
    </Grid>
    <Grid item md={4}>
      <StyleIconButton component="a" size="small" href={linkedin || ''}>
        <LinkedInIcon fontSize="small" />
      </StyleIconButton>
    </Grid>
    <Grid item md={4}>
      <StyleIconButton component="a" size="small" href={`mailto:${mail}`}>
        <MailOutlineIcon fontSize="small" />
      </StyleIconButton>
    </Grid>
    <Grid item md={4}>
      <StyleIconButton component="a" size="small" href={strava || ''}>
        {getLogo('Strava', { fontSize: 'large', style: { height: '0.5rem' } })}
      </StyleIconButton>
    </Grid>
  </Grid>
);

const Footer = observer(() => {
  const {
    profileStore: { profile, fullName },
  } = useStores();
  const { strava, github, linkedin, mail } = profile || {};
  return (
    <StyledFooter>
      <StyledGrid container spacing={2} direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <LogoFooter name={fullName} />
        </Grid>
        <Grid item>
          <FindMeFooter {...{ strava, github, linkedin, mail }} />
        </Grid>
      </StyledGrid>
    </StyledFooter>
  );
});

export default Footer;
