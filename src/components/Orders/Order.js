import React from 'react';
import classes from './Order.css'

const order = (props) =>  {
  return <div className={classes.Order}>
    <p></p>
    <p>Price: <strong>Rupees {props.price}</strong></p>
  </div>
}

export default order;