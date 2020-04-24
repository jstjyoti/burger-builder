import  React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
  {label:'Salad', type: 'salad'},
  {label:'Bacon', type: 'bacon'},
  {label:'Meat', type: 'meat'},
  {label:'Cheese', type: 'cheese'}
]

const buildControls = (props) => (  
<div className={classes.BuildControls}>
  <p>Current Price: {props.price} Rupees</p>
  {controls.map((ctrl => (
    <BuildControl 
      key={ctrl.label} 
      igLabel={ctrl.label} 
      disabled={props.disabled[ctrl.type]}
      added={() => props.added(ctrl.type)} 
      removed={() => props.removed(ctrl.type)}></BuildControl>
  )))}
</div>
);

export default buildControls;