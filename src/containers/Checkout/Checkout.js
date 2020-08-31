import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component {
  render() {
    var {ingridients} = this.props;
    return (
      <React.Fragment>
        <CheckoutSummery 
          ingridients={ingridients} 
          cancelCheckout={() => this.props.history.goBack()}
          continueCheckout={() => this.props.history.replace('/checkout/contact-data')}
        />
        <Route 
          path= {this.props.match.path + '/contact-data'} 
          component={ContactData}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingridients: state.ingridients
  }
}

export default connect(mapStateToProps)(Checkout);