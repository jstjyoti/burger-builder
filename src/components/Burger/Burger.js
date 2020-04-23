import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
  return <div className={classes.Wrapper}>
    <BurgerIngredient type="bread-top"/>
    <BurgerIngredient type="cheese"/>
    <BurgerIngredient type="salad"/>
    <BurgerIngredient type="meat"/>
    <BurgerIngredient type="bread-bottom"/>
  </div>
}

export default burger;