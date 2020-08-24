import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingridients: {}
  }

  componentWillMount() {
    this.setState({
      ingridients: this.props.location.ingridients,
      price: this.props.location.price
    });
  }

  render() {
    var {price, ingridients} = this.state;
    return (
      <React.Fragment>
        <CheckoutSummery 
          ingridients={ingridients} 
          cancelCheckout={() => this.props.history.goBack()}
          continueCheckout={() => this.props.history.replace('/checkout/contact-data')}
        />
        <Route 
          path= {this.props.match.path + '/contact-data'} 
          render={(props) => <ContactData ingridients={ingridients} price={price} {...props}/>}
        />
      </React.Fragment>
    )
  }
}

export default Checkout;