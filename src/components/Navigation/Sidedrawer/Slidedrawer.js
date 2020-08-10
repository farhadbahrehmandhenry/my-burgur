import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

import classes from './Slidedrawer.css';

const Slidedrawer = (props) => {

  var classN = [classes.SlideDrawer, classes.Close];

  if (props.open) {
    classN = [classes.SlideDrawer, classes.Open];
  }

  console.log(props, classN)
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={() => props.closed()}/>
      <div className={classN.join(' ')}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  )
}

export default Slidedrawer; 
