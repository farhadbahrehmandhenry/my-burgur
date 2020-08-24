import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
import _ from 'lodash';

class OrderSummery extends Component {
  render () {
    var ingridients = [];

    _.forEach(this.props.ingridients, (number, ingridient) => ingridients.push({[ingridient]: number}));

    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>ingridients</p>
        <ul>
          {_.map(ingridients, (ing, index) => (
            <li key={index}>
              <span style={{'textTransform':'capitalize'}}>{Object.keys(ing)[0]}</span>: {Object.values(ing)[0]}
            </li>)
          )}
        </ul>

        <h3>Total: ${this.props.total}</h3>
        <p>do you want to continue to checkout?</p>
        <Button title='Cancel' buttonType='Danger' clicked={() => this.props.cancelHandler()}/>
        <Button title='Continue' buttonType='Success' clicked={() => this.props.continueHandler()}/>
    </Auxiliary>
    )
  }
};

export default OrderSummery;