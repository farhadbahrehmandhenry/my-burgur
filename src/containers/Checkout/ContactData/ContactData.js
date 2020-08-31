import React, {Component} from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axiosOrder';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import _ from 'lodash';
import {connect} from 'react-redux';

class ContactData extends Component {
  state = {
    orderForm: { 
      name: this.createInputConfig({type: 'name', required: true}),
      email: this.createInputConfig({type: 'email', required: true}), 
      city: this.createInputConfig({type: 'city', required: true}),
      street: this.createInputConfig({type: 'street', required: true}),
      deliveryMethod: this.createInputConfig({type: 'deliveryMethod', required: true})
    },
    isLoading: false
  }

  createInputConfig({type, required}) {
    var config;

    if (_.includes(['name', 'city', 'street'], type)) {
      config = {
        elementType: 'input', 
        elementConfig: {type: 'text', placeholder: type}, 
        value: '', 
        name: type,
        validation: {
          required: required
        },
        valid: false,
        touched: false
      };
    }
    else if (type === 'email') {
      config = {
        elementType: 'input', 
        elementConfig: {type: 'email', placeholder: type}, 
        value: '', 
        name: type,
        validation: {
          required: required
        },
        valid: false,
        touched: false
      };
    }
    else if (type === 'deliveryMethod') {
      config = {
        elementType: 'select', 
        elementConfig: {options: [{value: 'slow', displayValue: 'slow'}, 
        {value: 'fast', displayValue: 'fast'}]}, 
        value: 'slow', 
        name: type,
        valid: true,
        touched: false
      };
    }

    return config;
  }

  order(event) {
    event.preventDefault();
    var formData = {};
  
    _.forEach(this.state.orderForm, (value, item) => formData[item] = value.value);

    var valid = _.every(_.map(_.values(this.state.orderForm), 'valid'), valid => valid === true);

    if (valid) {
      this.setState({isLoading: true});
  
      var order = {ingridients: this.props.ingridients, price: this.props.price, formData: formData}
      
      axios.post('/orders.json', order)
      .then(response => {
        process.env.NODE_ENV === 'development' && console.log(response);
  
        this.setState({isLoading: true});
  
        this.props.history.push('/');
      })
      .catch(error => this.setState({isLoading: true}))
    }
    else {
      alert('Hoyyyyyyyy');
    }
  }

  validation(value, rules, type) {
    var isValid = false;

    if (type !== 'deliveryMethod') {
      if (rules.required) {
        isValid = value.trim() !== '';
      }
    }
    else {
      isValid = true;
    }


    return isValid;
  }

  handleChange({value, type}) {
    var newOrderForm = {...this.state.orderForm};
    var rules = newOrderForm[type].validation;
    var newVal = newOrderForm[type];
    newVal.value = value;
    newVal.valid = this.validation(value, rules, type);
    newVal.touched = true;

    this.setState({orderForm: newOrderForm});
  }

  render() {
    var orderForm = _.values(this.state.orderForm);
    var formData = {};
  
    _.forEach(this.state.orderForm, (value, item) => formData[item] = value.value);
console.log(formData, this.state.orderForm, _.values(this.state.orderForm),  _.every(_.map(_.values(formData), 'valid'), valid => valid === true))
    return (
      <div className={classes.ContactData}>
        <h4>Fill in your information</h4>
        {this.state.isLoading ? <Spinner /> : 
          <form onSubmit={(event) => this.order(event)}>
            {_.map(orderForm, (item, index) => (
              <Input 
                elementType={item.elementType}  
                elementConfig={item.elementConfig} 
                value={item.value} 
                key={index}
                name={item.name}
                Valid={item.valid}
                touched={item.touched}
                shouldValidate={item.validation}
                handleChange={({value, type}) => this.handleChange({value, type})}
              /> 
            ))}
          <Button 
            buttonType='Success' 
            clicked={(event) => this.order(event)} 
            title='Order'
            disabled = {!_.every(_.map(_.values(this.state.orderForm), 'valid'), valid => valid === true)}
            />
        </form>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ingridients: state.ingridients,
    price: state.price
  }
}

export default connect(mapStateToProps)(ContactData);