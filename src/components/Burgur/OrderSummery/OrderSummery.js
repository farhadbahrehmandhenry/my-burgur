import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
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
      <p>Continue to chackout?</p>
    </Auxiliary>
  )
};

export default OrderSummery;