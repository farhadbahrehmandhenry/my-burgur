import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burgur from '../../components/Burgur/Burgur';
import BuildControls from '../../components/Burgur/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummery from '../../components/Burgur/OrderSummery/OrderSummery';
import _ from 'lodash';

const INGRIDIEN_PRICES = {
  salad: 1,
  meat: 2,
  cheese: 1,
  bacon: 2
}
class BurgurBuilder extends Component {
  state = {
    ingridients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState(newIngridients) {
    var ingridientsSum = _.sum(_.values(newIngridients));
    console.log(ingridientsSum, this.state.ingridients)
    this.setState({purchasable: ingridientsSum > 0})
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
    
  }

  render () {
    var disabledInfo = {...this.state.ingridients};

    for (var key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
      <Auxiliary >
        <Model show={this.state.purchasing} backDropClicked={() => this.cancelPurchaseHandler()}>
          <OrderSummery 
            ingridients={this.state.ingridients} 
            cancelHandler={() => this.cancelPurchaseHandler()} 
            continueHandler={() => this.continuePurchaseHandler()}
          />
        </Model>
        <Burgur ingridients={this.state.ingridients}/>
        <BuildControls 
          add={({type}) => this.addIngridient({type})} 
          remove={({type}) => this.removeIngridient({type})}
          disabled={disabledInfo} 
          purchasable={this.state.purchasable} 
          price={this.state.totalPrice}
          onOrder={() => this.purchaseHandler()}
        />
      </Auxiliary>  
    );
  }
}

export default BurgurBuilder;