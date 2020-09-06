import {actions} from './actionTypes';
import axios from '../../axios-orders';

export const addIngridients = (name) => {
  return  {
    type: actions.addIngridients,
    item: name
  }
}

export const deleteIngridients = (name) => {
  return  {
    type: actions.deleteIngridients,
    item: name
  }
}

export const setIngridients = (ingridients) => {
  return  {
    type: actions.setIngridients,
    ingridients: ingridients
  };
};

export const initIngridients = () => {
  return dispatch => {
    axios.get('/ingridients.json')
    .then(response => dispatch(setIngridients(response.data)))
    .catch(error =>  this.setState({error: error}))
  };
};