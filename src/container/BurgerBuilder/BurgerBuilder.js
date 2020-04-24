import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildCntrols';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    }
  }
  render(){
    return <>

      <Burger ingredients={this.state.ingredients}></Burger>
      <BuildControls></BuildControls>
      
    </>
  }
}

export default BurgerBuilder;
