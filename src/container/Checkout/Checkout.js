import React,  {Component} from 'react';
import CheckoutSummary from '../../components/Orders/ChechoutSummary';
import {Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
class Checkout extends Component{
  state={
    ingredients: null,
    totalPrice: 0
  }
  componentWillMount(){
    const query = new URLSearchParams(this.props.location.search);
    const ingredient = {};
    let price = 0;
    for (let params of query.entries()){
      if(params[0] === 'price'){
        price = params[1];
      }
      ingredient[params[0]] = +params[1];
    }
    this.setState({ingredients: ingredient, totalPrice: price});
  }
  checkoutCancelHandler = () =>{
    this.props.history.goBack();
  }
  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }
  render(){
    return <>
      <CheckoutSummary ingredients={this.state.ingredients} checkoutCancel={this.checkoutCancelHandler} checkoutContinue={this.checkoutContinueHandler}></CheckoutSummary>
      <Route path={this.props.match.path + '/contact-data'} render={(props)=>{
        return <ContactData  ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}></ContactData>
      }}></Route>
    </>
  }
}

export default Checkout;