import  {actions} from '../actions/actionTypes';

var initialState = {
  ingridients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0
  },
  price: 4
}

const INGRIDIEN_PRICES = {
  salad: 1,
  meat: 2,
  cheese: 1,
  bacon: 2
}

const reducer = (state=initialState, action) => {
  var ingridients, newPrice;

  if (action.type === actions.addIngridients) {
    ingridients = {...state.ingridients};
    
    ingridients[action.item.type] ++;

    newPrice = state.price;

    newPrice = INGRIDIEN_PRICES[action.item.type] + newPrice;

    return {
      ...state, ingridients: ingridients, price: newPrice
    }
  }
  else if (action.type === actions.deleteIngridients) {
    ingridients = {...state.ingridients};
    
    ingridients[action.item.type] --;

    newPrice = state.price;

    newPrice = newPrice - INGRIDIEN_PRICES[action.item.type];
    
    return {
      ...state, ingridients: ingridients, price: newPrice
    }
  }

  return state;
}

export default reducer