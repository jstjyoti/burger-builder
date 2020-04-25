import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';


const toolbar = (props) => {
  return <header className={classes.Toolbar}>
    <DrawerToggle toggle={props.toggledrawer}/>
    <div className={classes.Logo}>
      <Logo ></Logo>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
};

export default toolbar;