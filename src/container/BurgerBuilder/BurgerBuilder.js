import React, {Component} from 'react';

// import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildCntrols';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
    totalPrice: 50,
    purchasable: false,
    purchasing: false
  }
  updatePurchaseState (ing) {
    const ingredients={ ...ing };
    const sum= Object.keys(ingredients).map(key => ingredients[key]).reduce((sum, el)=>{
      return sum + el;
    },0)
    this.setState({ purchasable: sum > 0 });
  }
  purchaseHandler = () => {
    this.setState({purchasing: true});
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
    this.updatePurchaseState(updatedIngredients);

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
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }
  render(){
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let keys in disableInfo){
      disableInfo[keys] = disableInfo[keys] <= 0
    }
    return <>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
      </Modal>
      <Burger ingredients={this.state.ingredients}></Burger>
      <BuildControls 
      price={this.state.totalPrice} 
      disabled={disableInfo} 
      added={this.addIngredientHandler} 
      removed={this.removeIngredientHandler} 
      purchasable={this.state.purchasable}
      order={this.purchaseHandler}></BuildControls>
      
    </>
  }
}

export default BurgerBuilder;
