import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component{

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(el=> {
      return (<li key={el}>
            <span style={{textTransform: 'capitalize'}}>{el}</span>
            : {this.props.ingredients[el]}
          </li>);
    })
    return <>
      <h3>Your Order</h3>
      <p>Delicious Burger with following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Amount Payable: {this.props.price.toFixed(2)}</p>
      <p>Continue To Checkout?</p>
      <Button btnType='Danger' click={this.props.cancel}>Cancel</Button>
      <Button btnType='Success' click={this.props.continue}>Continue</Button>

    </>
  }
}
export default OrderSummary;