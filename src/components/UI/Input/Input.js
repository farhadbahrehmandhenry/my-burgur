import React from 'react';
import classes from './Input.css';

const Input = (props) => {
  var inputElement;
  var inputClass = [classes.InputElement];

  if (!props.Valid && props.shouldValidate && props.touched) {
    inputClass.push(classes.Invalid);
  }

  switch (props.elementType) {
    case ('textarea'):
      inputElement = (
        <textarea 
          className={inputClass.join(' ')} 
          {...props.elementConfig} 
          value={props.value} 
          onChange={(event) => props.handleChange({value: event.target.value, type: props.name})}
        />
      );
      break;
    case ('select'):
      inputElement = (
        <select 
          className={inputClass.join(' ')} 
          value={props.value} 
          onChange={(event) => props.handleChange({value: event.target.value, type: props.name})}
        >
          {props.elementConfig.options.map(option => {
            return <option key={option.value} value={option.value}>{option.displayValue}</option>
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input 
          className={inputClass.join(' ')} 
          {...props.elementConfig} 
          value={props.value}                 
          onChange={(event) => props.handleChange({value: event.target.value, type: props.name})}
        />
      )
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
} 

export default Input;