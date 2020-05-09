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
          id: 'name',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
          },
          value: 'Jyoti'
        },
        street: {
          id: 'street',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Street'
          },
          value: 'Street'
        },
        zipcode: {
          id: 'zipcode',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Zipcode'
          },
          value: '123456'
        },
        country: {
          id:'country',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder:'Country'
          },
          value: 'India'
        },
        email: {
          id: 'email',
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your Email'
          },
          value: 'abc@email.com'
        },
      deliveryMethod: {
        id:'deliveryMethod',
        elementType: 'select',
        elementConfig: {
          options: [{value: 'fastest', displayValue: 'fastest'},
          {value: 'cheapest', displayValue: 'cheapest'},
          {value: 'ease', displayValue: 'ease'}
          ],
          type: 'select',
          placeholder: 'Your deliver method'
        },
        value: 'fastest'
      },
    },
    loading: false
  }
  inputChangeHandler = (e, inputId) => {
    const updateOrderForm = {...this.state.orderForm};
    const updatedFormEl = {...updateOrderForm[inputId]};
    updatedFormEl.value = e.target.value;
    updateOrderForm[inputId] = updatedFormEl;
    this.setState({orderForm: updateOrderForm});
  }
  orderHandler= (e) => {
    e.preventDefault();
    this.setState({loading: true});
    const formData = {};
    for (let el in this.state.orderForm){
      formData[el] = this.state.orderForm[el].value;
    }
    
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
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
    let form = this.state.loading ? <Spinner></Spinner> : <form onSubmit={this.orderHandler}>
      {formElement.map(el => {
        return <Input key={el.id} elementType={el.config.elementType} 
        elementConfig={el.config.elementConfig} 
        value={el.value}
        change={(e)=>{
          return this.inputChangeHandler(e, el.id)
        }}
        ></Input>
      })}
      <Button btnType='Success' >ORDER</Button>
    </form>;
    return <div className={classes.Contact}>
      <h4>
        Enter Contact Data
      </h4>
      {form}
    </div>
  }
}
