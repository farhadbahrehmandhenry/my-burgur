import React, {Component} from 'react';
import classes from './Order.css';

class Order extends Component {
  render() {
    var ingridients = Object.keys(this.props.order.ingridients);
    var ing = ingridients.map(i => ({[i]: this.props.order.ingridients[i]}))

    return(
      <div className={classes.Order}>
        {ing.map(ingridient => {
          if (Object.values(ingridient)[0] !== 0) {
            return (
              <React.Fragment>
                <div>{Object.keys(ingridient)[0]}</div>
                <div>{Object.values(ingridient)[0]}</div>
              </React.Fragment>
            )
          }
        })}
        <div className={classes.Price}>USD {this.props.order.price}</div>
      </div>
    )
  }
}

export default Order;