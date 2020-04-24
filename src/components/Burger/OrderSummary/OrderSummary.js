import React from 'react';

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
    <p>Continue To Checkout?</p>

  </>
}

export default orderSummary;