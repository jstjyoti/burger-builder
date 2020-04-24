import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.IgLabel}>{props.igLabel}</div>
    <button className={classes.Remove} onClick={props.removed} >Remove</button>
    <button className={classes.Add} onClick={props.added}>Add</button>
  </div>
);

export default buildControl;