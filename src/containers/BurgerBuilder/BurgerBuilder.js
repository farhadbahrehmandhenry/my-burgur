import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import axios from '../../axiosOrder';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import _ from 'lodash';
import {connect} from 'react-redux';
import {addIngridients, deleteIngridients} from '../../store/actions/index';

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    successPost: false,
  }

  componentDidMount() {

  }

  purchaseHandler() {
    this.setState({purchasing: !this.state.purchasing});
  }

  cancelPurchaseHandler() {
    this.setState({purchasing: false});
  }

  continuePurchaseHandler() {
    this.props.history.push({pathname: '/checkout'});
  }

  render () {
    var disabledInfo = {...this.props.ingridients};

    for (var key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
      <Auxiliary >
        <Model show={this.state.purchasing} backDropClicked={() => this.cancelPurchaseHandler()}>
          <OrderSummery 
            ingridients={this.props.ingridients} 
            cancelHandler={() => this.cancelPurchaseHandler()} 
            continueHandler={() => this.continuePurchaseHandler()}
            total={this.props.totalPrice}
          />
        </Model>
        {this.props.ingridients || !this.state.error ? 
          <Auxiliary>
            <Burger ingridients={this.props.ingridients}/>
            <BuildControls 
              add={(type) => this.props.addIngridient(type)} 
              remove={(type) => this.props.deleteIngridient(type)}
              disabled={disabledInfo} 
              purchasable={ _.sum(_.values(this.props.ingridients)) > 0} 
              price={this.props.totalPrice}
              onOrder={() => this.purchaseHandler()}
            />
          </Auxiliary>
          :
          <Spinner />
        }

      </Auxiliary>  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingridients: state.ingridients,
    totalPrice: state.price
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addIngridient: (type) => dispatch(addIngridients(type)),
    deleteIngridient: (type) => dispatch(deleteIngridients(type))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));