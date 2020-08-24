import React from 'react';
import Logo from '../../assets/Logo.png';
import classes from './Logo.css';

const LogoBurger = (props) => (
  <img src={Logo} alt='Logo' className={classes.Logo}></img>
);

export default LogoBurger;