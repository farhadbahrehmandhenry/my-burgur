import React from 'react';
import classes from './Backdrop.css';

const BackDrop = (props) => {
  console.log(props)
  return props.show ? 
    <div className={classes.BackDrop} onClick={() => props.clicked()}></div> : null
};

export default BackDrop;