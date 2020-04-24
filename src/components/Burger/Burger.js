import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  let newIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
    })
  }).reduce((arr, el) => {
    return  arr.concat(el);
  },[]);
  if(newIngredients.length === 0){
    newIngredients = <div>Please start adding ingredients!</div>
  }
  return <div className={classes.Wrapper}>
    <BurgerIngredient type="bread-top"/>
    {newIngredients}
    <BurgerIngredient type="bread-bottom"/>
  </div>
}

export default burger;