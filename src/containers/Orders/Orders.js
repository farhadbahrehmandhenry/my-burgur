import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import classes from './Orders.css';
import axios from 'axios';

class Orders extends Component {
  state = {
    orders: [],
    isLoading: true
  }

  componentDidMount() {
    axios.get('https://my-biggest-burger.firebaseio.com/orders.json')
    .then(response => { 
      var orders = [];
      for (var item in response.data) {
        orders.push({id: item, ...response.data[item]})
      }

      this.setState({orders, isLoading: false});
    })
    .catch(error => this.setState({isLoading: false}))
    
  }

  render() {
    return(
      <div className={classes.Orders}>
        <h3>Your Orders</h3>
        {this.state.orders.map(order => <Order order={order} key={order.id}/>)}
      </div>
    )
  }
}

export default Orders;