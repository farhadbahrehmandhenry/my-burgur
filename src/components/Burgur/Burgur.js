import React from 'react';
import BurgurIngridient from './BurgurIngridient/BurgurIngridient';
import classes from './Burgur.css';
import _ from 'lodash';

const burgur = (props) => {
  var ingridients = [];

  _.forEach(props.ingridients, (number, ingridient) => _.times(number, () => ingridients.push(ingridient)));
  
  return (
    <div className={classes.Burgur}>
      <BurgurIngridient type='bread-top' />
      {ingridients.length !== 0 ? 
        ingridients.map((ingridient, index) => <BurgurIngridient key={index} type={ingridient}/>)
      : 
        <p>'please select some ingridients!!'</p>
      }
      <BurgurIngridient type='bread-bottom' />
    </div>
  );
}

export default burgur;