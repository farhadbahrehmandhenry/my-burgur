import React from 'react';
import classes from './Button.css';

const Button = (props) => (
  <button 
    className={[classes.Button, classes[props.buttonType]].join(' ')}
    onClick={props.clicked}
    disabled={props.disabled}
  >{props.title}
  </button>
)

export default Button;