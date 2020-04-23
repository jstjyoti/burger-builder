import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 1,
      cheese: 1,
      meat: 2,
      salad: 3
    }
  }
  render(){
    return <Aux>
        <Burger ingredients={this.state.ingredients}></Burger>
        <div>Build Components for adding ingredients</div>
    </Aux>
  }
}

export default BurgerBuilder;
