import React from 'react';
import classes from './BurgurIngridient.css';
import PropTypes from 'prop-types';

const burgurIngridient = (props) => {
  let ingridient = null;

  switch(props.type) {
    case('bread-bottom'):
      ingridient = <div className={classes.BreadBottom}></div>;
      break;
    case('bread-top'):
      ingridient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      )
      break;
    case('meat'):
    ingridient = ingridient = <div className={classes.Meat}></div>;
    break;
    case('cheese'):
    ingridient = ingridient = <div className={classes.Cheese}></div>;
    break;
    case('salad'):
    ingridient = ingridient = <div className={classes.Salad}></div>;
    break;
    case('bacon'):
    ingridient = ingridient = <div className={classes.Bacon}></div>;
    break;
    default: ingridient = null;
  }

  return ingridient;
}

burgurIngridient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgurIngridient;