import * as React from 'react';
import {
  AppBar, Button, IconButton, Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from "./Logo";


const Header = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Logo />
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
