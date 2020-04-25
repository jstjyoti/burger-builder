import React from 'react';

import Aux from '../../../hoc/Aux';
import classes from './Modal.css';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => {
  let show = props.show ? 'translateY(0)' : 'translateY(-100vh)'
  let opacity= props.show ? '1' : '0'
  let style = {
    transform: show,
    opacity: opacity
  }
  return <Aux>
    <BackDrop show={props.show} clicked={props.modalClosed}></BackDrop>
    <div className={classes.Modal}
      style={style}>
      {props.children}
    </div>
  </Aux>
}
  


export default modal;