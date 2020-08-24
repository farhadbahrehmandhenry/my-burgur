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

const INGRIDIEN_PRICES = {
  salad: 1,
  meat: 2,
  cheese: 1,
  bacon: 2
}
class BurgerBuilder extends Component {
  state = {
    ingridients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    isLoading: false,
    successPost: false,
    error: false
  }

  componentDidMount() {
    axios.get('/ingridients.json')
    .then(response => this.setState({ingridients: response.data}))
    .catch(error =>  this.setState({error: error}))
  }

  updatePurchaseState(newIngridients) {
    var ingridientsSum = _.sum(_.values(newIngridients));

    this.setState({purchasable: ingridientsSum > 0});
  }

  addIngridient = ({type}) => {
    var newIngridients = {...this.state.ingridients};
    var newPrice = this.state.totalPrice;

    newIngridients[type] = newIngridients[type] + 1; 
    newPrice = INGRIDIEN_PRICES[type] + newPrice;

    this.setState({ingridients: newIngridients, totalPrice: newPrice});
    this.updatePurchaseState(newIngridients);
  }

  removeIngridient = ({type}) => {
    var newIngridients = {...this.state.ingridients}
    var newPrice = this.state.totalPrice;

    newPrice = newIngridients[type] !== 0 ? newPrice - INGRIDIEN_PRICES[type] : newPrice;
    newIngridients[type] = newIngridients[type] === 0 ? 0 : newIngridients[type] - 1; 

    this.setState({ingridients: newIngridients, totalPrice: newPrice});
    this.updatePurchaseState(newIngridients);
  }

  purchaseHandler() {
    this.setState({purchasing: !this.state.purchasing});
  }

  cancelPurchaseHandler() {
    this.setState({purchasing: false});
  }

  continuePurchaseHandler() {
    this.props.history.push({
      pathname: '/checkout', 
      ingridients: this.state.ingridients,
      price: this.state.totalPrice 
    });
  }

  render () {
    var disabledInfo = {...this.state.ingridients};

    for (var key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
      <Auxiliary >
        <Model show={this.state.purchasing} backDropClicked={() => this.cancelPurchaseHandler()}>
        {!this.state.isLoading ? 
          <OrderSummery 
            ingridients={this.state.ingridients} 
            cancelHandler={() => this.cancelPurchaseHandler()} 
            continueHandler={() => this.continuePurchaseHandler()}
            total={this.state.totalPrice}
          />
          :
          <Spinner />
        }
        </Model>
        {this.state.ingridients || !this.state.error ? 
          <Auxiliary>
            <Burger ingridients={this.state.ingridients}/>
            <BuildControls 
              add={({type}) => this.addIngridient({type})} 
              remove={({type}) => this.removeIngridient({type})}
              disabled={disabledInfo} 
              purchasable={this.state.purchasable} 
              price={this.state.totalPrice}
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

export default withErrorHandler(BurgerBuilder, axios);