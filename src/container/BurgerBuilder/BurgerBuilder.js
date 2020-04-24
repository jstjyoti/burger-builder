import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildCntrols';
import Burger from '../../components/Burger/Burger';

const PRICES ={
  salad: 10.50,
  cheese: 20,
  bacon: 55.60,
  meat: 60.40
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 50
  }
  addIngredientHandler = (type) => {
    const count = this.state.ingredients[type];
    const updatedCount = count + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const price = PRICES[type] + this.state.totalPrice;
    this.setState({ingredients: updatedIngredients, totalPrice: price});

  }
  removeIngredientHandler = (type) => {
    const count = this.state.ingredients[type];
    if(count <= 0 ) {
      return;
    }
    const updatedCount = count - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const price = this.state.totalPrice - PRICES[type];
    this.setState({ingredients: updatedIngredients, totalPrice: price});
  }
  render(){
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let keys in disableInfo){
      disableInfo[keys] = disableInfo[keys] <= 0
    }
    return <>

      <Burger ingredients={this.state.ingredients}></Burger>
      <BuildControls price={this.state.totalPrice} disabled={disableInfo} added={this.addIngredientHandler} removed={this.removeIngredientHandler}></BuildControls>
      
    </>
  }
}

export default BurgerBuilder;
