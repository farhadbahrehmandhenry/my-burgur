import React from 'react';
import classes from './Model.css';

const Model = (props) => (
  <div className={classes.Model}>
    {props.children}
  </div>
);

export default Model;
