import React from 'react';

import Aux from '../../../hoc/Aux';
import classes from './Modal.css';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => (
  <Aux>
    <BackDrop show={props.show} clicked={props.modalClosed}></BackDrop>
    <div className={classes.Modal}
    style={{
      tranform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
      {props.children}
    </div>
  </Aux>
  );

export default modal;