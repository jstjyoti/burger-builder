import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Forms/Input/Input';
export default class ContactData extends Component {
  state = {
    orderForm:{
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
          },
          value: 'Jyoti'
        },
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Street'
          },
          value: 'Street'
        },
        zipcode: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Zipcode'
          },
          value: '123456'
        },
        country: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder:'Country'
          },
          value: 'India'
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your Email'
          },
          value: 'abc@email.com'
        },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{value: 'fastest', displayValue: 'fastest'},
          {value: 'cheapest', displayValue: 'cheapest'},
          {value: 'ease', displayValue: 'ease'}
          ],
          type: '',
          placeholder: 'Your Name'
        },
        value: 'Jyoti'
      },
    },
    loading: false
  }
  orderHandler= (e) => {
    e.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Jyoti',
        address:{
          street: 'abc',
          zipCode: '123654',
          country: 'India'
        },
        email: 'abc@gmail.com',
        phone: '9874563210'
      },
      deliveryMethod: 'fastest'
    }
    //send data to server
    //nodename .json for firebase
    axios.post('/orders.json', order) 
      .then(res => {
        this.setState({loading: false});
        this.props.history.push('/');
      }).catch(err => {
        this.setState({loading: false});
      });
  }

  render(){
    let formElement = [];
    for (let key in this.state.orderForm){
        formElement.push({
          id: key,
          config: this.state.orderForm[key]
        })
    }
    let form = this.state.loading ? <Spinner></Spinner> : <form>
    {formElement.map(el => {
      return <Input key={el.value} elementType={el.config.elementType} elementConfig={el.config.elementConfig} ></Input>
    })}
  </form>;
    return <div className={classes.Contact}>
      <h4>
        Enter Contact Data
      </h4>
      {form}
    </div>
  }
}
