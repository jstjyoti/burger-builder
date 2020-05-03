import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
  return <div className={classes.Checkout}>
      <h1>Good Taste! Good Food!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}></Burger>
      </div>
      <Button btnType='Danger' click>CANCEL</Button>
      <Button btnType='Success' click>CONTINUE</Button>
  </div>
}

export default checkoutSummary;