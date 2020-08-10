import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import _ from 'lodash';

const OrderSummery = (props) => {
  var ingridients = [];

  _.forEach(props.ingridients, (number, ingridient) => ingridients.push({[ingridient]: number}));

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>ingridients</p>
      <ul>
        {_.map(ingridients, ing => (
          <li key={ing}>
            <span style={{'textTransform':'capitalize'}}>{Object.keys(ing)[0]}</span>: {Object.values(ing)[0]}
          </li>)
        )}
      </ul>

      <h3>Total: ${props.total}</h3>
      <p>di you want to continue to checkout?</p>
      <Button title='Cancel' buttonType='Danger' clicked={() => props.cancelHandler()}/>
      <Button title='Continue' buttonType='Success' clicked={() => props.continueHandler()}/>
    </Auxiliary>
  )
};

export default OrderSummery;