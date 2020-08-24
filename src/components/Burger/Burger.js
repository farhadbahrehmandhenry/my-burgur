import React from 'react';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';
import classes from './Burger.css';
import _ from 'lodash';

const burger = (props) => {
  var ingridients = [];

  _.forEach(props.ingridients, (number, ingridient) => _.times(number, () => ingridients.push(ingridient)));
  
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type='bread-top' />
      {ingridients.length !== 0 ? 
        ingridients.map((ingridient, index) => <BurgerIngridient key={index} type={ingridient}/>)
      : 
        <p>'please select some ingridients!!'</p>
      }
      <BurgerIngridient type='bread-bottom' />
    </div>
  );
}

export default burger;