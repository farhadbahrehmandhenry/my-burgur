import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = (props) => (
  <Auxiliary>
    <div>Toolbar, SideDrawer, Backdrop </div>
    <div className={classes.content}>
      {props.children}
    </div>
  </Auxiliary>
);

export default layout;