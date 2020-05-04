import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputEle = null;
  switch(props.inputtype) {
    case('input'): 
      inputEle = <input className={classes.InputElement} {...props.elementConfig} value={props.vaalue}/>
      break;
    case('textarea'):
      inputEle = <textarea className={classes.InputElement} {...props.elementConfig} value={props.value}/>
      break;
    default: 
      inputEle = <input className={classes.InputElement} {...props.elementConfig} value={props.value}/>

  }
  return <div className={classes.Input}> 
    <label className={classes.Label}>{props.label}</label>
    {inputEle}
  </div>
}

export default input;