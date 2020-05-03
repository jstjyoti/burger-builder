import React, {Component} from 'react';

// import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildCntrols';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import  withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

const PRICES ={
  salad: 10.50,
  cheese: 20,
  bacon: 55.60,
  meat: 60.40
}
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 50,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }
  componentDidMount (){
    axios.get('/ingredients.json').then(res => {
      this.setState({ingredients: res.data})
    }).catch(err=>{
      this.setState({error: true})
    });
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
  purchaseContinueHandler = () =>{
    const query = [];
    for( let i in this.state.ingredients) {
      query.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    query.push('price='+this.state.totalPrice);
    const queryString = query.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
    
  }
  render(){
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let keys in disableInfo){
      disableInfo[keys] = disableInfo[keys] <= 0
    }
    let orderSummary = null;
    let burger = this.state.error? <p>Something went wrong, an error recieved</p>: <Spinner></Spinner>;
    if(this.state.ingredients) {
      burger = <><Burger ingredients={this.state.ingredients}></Burger>
                  <BuildControls 
                  price={this.state.totalPrice} 
                  disabled={disableInfo} 
                  added={this.addIngredientHandler} 
                  removed={this.removeIngredientHandler} 
                  purchasable={this.state.purchasable}
                  order={this.purchaseHandler}></BuildControls>
              </>

      orderSummary = <OrderSummary 
        ingredients={this.state.ingredients} 
        price={this.state.totalPrice} 
        cancel={this.purchaseCancelHandler} 
        continue={this.purchaseContinueHandler}>
        </OrderSummary>
    }
    if(this.state.loading){
      orderSummary = <Spinner></Spinner>
    }
    return <>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
      
    </>
  }
}

export default withErrorHandler(BurgerBuilder, axios);
