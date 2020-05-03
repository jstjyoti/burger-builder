import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { Switch } from 'react-router-dom';
export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
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
    let form = this.state.loading ? <Spinner></Spinner> : <form>
    <input type='text' name='name' placeholder='Your Name' className={classes.Input}></input>
    <input type='text' name='email' placeholder='Your Email' className={classes.Input}></input>
    <input type='text' name='street' placeholder='Street' className={classes.Input}></input>
    <input type='text' name='postal' placeholder='Postal Code' className={classes.Input}></input>
    <Button btnType='Success' click={this.orderHandler}>ORDER</Button>
  </form>;
    return <div className={classes.Contact}>
      <h4>
        Enter Contact Data
      </h4>
      {form}
    </div>
  }
}
