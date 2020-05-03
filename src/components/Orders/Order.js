import React from 'react';
import classes from './Order.css'

const order = (props) =>  {
  const ingredients = [];
  for (let i in props.ingredients){
    ingredients.push({
      name: i,
      amount: props.ingredients[i]
    })
  }

  const ingredientsOutput = ingredients.map(el=>{
    return <span key={el.name} style={{textTransform:'capitalize', 
    display: 'inline-block',
    margin:'0 8px',
    border: '1px solid #ccc',
    padding: '5px'
    }}>{el.name} ({el.amount})</span>
  })
  return <div className={classes.Order}>
    {ingredientsOutput}
    <p>Price: <strong>Rupees {props.price.toFixed(2)}</strong></p>
  </div>
}

export default order;