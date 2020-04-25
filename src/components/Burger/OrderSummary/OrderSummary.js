import React from 'react';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(el=> {
    return (<li key={el}>
          <span style={{textTransform: 'capitalize'}}>{el}</span>
          : {props.ingredients[el]}
        </li>);
  })
  return <>
    <h3>Your Order</h3>
    <p>Delicious Burger with following ingredients</p>
    <ul>{ingredientSummary}</ul>
    <p>Amount Payable: {props.price.toFixed(2)}</p>
    <p>Continue To Checkout?</p>
    <Button btnType='Danger' click={props.cancel}>Cancel</Button>
    <Button btnType='Success' click={props.continue}>Continue</Button>

  </>
}

export default orderSummary;