import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burgur from '../../components/Burgur/Burgur';
import BuildControls from '../../components/Burgur/BuildControls/BuildControls';
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
    totalPrice: 4
  }

  addIngridient = ({type}) => {
    var newIngridients = {...this.state.ingridients};
    var newPrice = this.state.totalPrice;

    newIngridients[type] = newIngridients[type] + 1; 
    newPrice = INGRIDIEN_PRICES[type] + newPrice;

    this.setState({ingridients: newIngridients, totalPrice: newPrice});
  }

  removeIngridient = ({type}) => {
    var newIngridients = {...this.state.ingridients}
    var newPrice = this.state.totalPrice;

    newPrice = newIngridients[type] !== 0 ? newPrice - INGRIDIEN_PRICES[type] : newPrice;
    newIngridients[type] = newIngridients[type] === 0 ? 0 : newIngridients[type] - 1; 

    this.setState({ingridients: newIngridients, totalPrice: newPrice});
  }

  render () {
    var disabledInfo = {...this.state.ingridients};

    for (var key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
      <Auxiliary >
        <Burgur ingridients={this.state.ingridients}/>
        <BuildControls 
          add={({type}) => this.addIngridient({type})} 
          remove={({type}) => this.removeIngridient({type})}
          disabled={disabledInfo}  
          price={this.state.totalPrice}
        />
      </Auxiliary>  
    );
  }
}

export default BurgurBuilder;