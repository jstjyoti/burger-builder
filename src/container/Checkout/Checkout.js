import React,  {Component} from 'react';
import CheckoutSummary from '../../components/Orders/ChechoutSummary';
class Checkout extends Component{
  state={
    ingredients:{
      meat: 1,
      salad: 1,
      cheese: 1,
      bacon: 2
    }
  }
  render(){
    return <>
      <CheckoutSummary ingredients={this.state.ingredients}></CheckoutSummary>
    </>
  }
}

export default Checkout;