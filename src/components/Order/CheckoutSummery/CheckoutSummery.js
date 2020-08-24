import React from 'react';
import Burger from '../../Burger/Burger';
import classes from './CheckoutSummery.css';
import Button from '../../UI/Button/Button';

const CheckoutSummery = (props) => {
  return (
    <div className={classes.CheckoutSummery}>
      <h3>Your burger</h3>
      <Burger ingridients={props.ingridients}/>
      <Button buttonType='Danger' title='CANCEL' clicked={() => props.cancelCheckout()}></Button>
      <Button  buttonType='Success' title='CONTINUE' clicked={() => props.continueCheckout()}></Button>
    </div>
  )
}

export default CheckoutSummery;