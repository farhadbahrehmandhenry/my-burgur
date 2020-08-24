import React from 'react';
import LogoBurger from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../Sidedrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle menuClick={() => props.DrawerToggleClicked()}/>
      <div><LogoBurger /></div>
      <nav><NavigationItems /></nav>
    </header>
  )
};

export default Toolbar;