import React from 'react';
import image from '../../assets/images/burger-logo.png';
import classes from './Logo.css'
const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={image} alt="Burger Logo"></img>
  </div>
)

export default logo;