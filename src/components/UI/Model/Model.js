import React from 'react';
import classes from './Model.css';
import BackDrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const Model = (props) => (
  <Auxiliary>
    <BackDrop show={props.show} clicked={() => props.backDropClicked()}/>
    <div 
      className={classes.Model}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? 1 : 0
      }}  
    >
    {props.children}
    </div>
  </Auxiliary>


);

export default Model;
