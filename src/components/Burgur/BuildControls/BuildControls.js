import React from 'react';
import _ from 'lodash';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
      {controls.map(control => {
        return <BuildControl 
          label={control.label} 
          key={control.label}
          disabled={props.disabled[control.type]}
          add={() => props.add({type: control.type})}
          remove={() => props.remove({type: control.type})}
          />
      })}
    </div>
  );
}

export default buildControls;