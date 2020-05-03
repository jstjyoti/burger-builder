import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputEle = null;
  switch(props.inputtype) {
    case('input'): 
      inputEle = <input className={classes.InputElement} {...props}/>
      break;
    case('textarea'):
      inputEle = <textarea className={classes.InputElement} {...props}/>
      break;
    default: 
      inputEle = <input className={classes.InputElement} {...props}/>

  }
  return <div className={classes.Input}> 
    <label className={classes.Label}>{props.label}</label>
    {inputEle}
  </div>
}

export default input;