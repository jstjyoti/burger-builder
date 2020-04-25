import React from 'react';

import classes from './SideDrawer.css';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open){
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return <>
  <BackDrop show={props.open} clicked={props.close}></BackDrop>
  <div className={attachedClasses.join(' ')}>
    <div className={classes.Logo}>
      <Logo></Logo>
    </div>
    <nav>
      <NavigationItems></NavigationItems>
    </nav>
  </div>
  </>
}

export default sideDrawer;