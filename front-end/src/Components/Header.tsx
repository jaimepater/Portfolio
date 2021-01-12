import * as React from 'react';
import { AppBar, IconButton, MenuList, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import { getRoutes } from '../Commons/Utils/getRoutes';

const StyledMenuList = styled(MenuList)`
  display: flex;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  align-items: center;
`;

export const StyledMenuIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
export const StyledLanguage = styled.div`
  flex: 1;
`;

const Header = () => {
  const { pathname } = useLocation();
  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledMenuIcon>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Logo />
        </StyledMenuIcon>
        <StyledMenuList>
          {getRoutes().map(route => (
            <MenuItem
              component={Link}
              key={route.id}
              to={route.path}
              selected={route.path === pathname}
            >
              {route.name}
            </MenuItem>
          ))}
        </StyledMenuList>
        <StyledLanguage />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
