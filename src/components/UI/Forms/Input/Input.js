import React from 'react';
import classes from './Input.css';

const input = (props) => {
  let inputEle = null;
  let inputClasses = [classes.InputElement];
  if(props.invalid && props.shouldValidate){
    inputClasses.push(classes.Invalid);
  }
  switch(props.elementType) {
    case('input'): 
      inputEle = <input 
        className={inputClasses.join(' ')} 
        {...props.elementConfig} 
        value={props.value}
        onChange={props.change}
      />
      break;
    case('textarea'):
      inputEle = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.change}/>
      break;
    case('select'):
      inputEle = <select className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.change}>
        {props.elementConfig.options.map(el => <option key={el.value} value={el.value}>{el.displayValue}</option>)}
      </select>
      break;
    default: 
      inputEle = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.change}/>

  }
  return <div className={classes.Input}> 
    <label className={classes.Label}>{props.label}</label>
    {inputEle}
  </div>
}

export default input;