import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'; 
import SideDrawer from '../Navigation/SideDrawer/SideDrawer' ;
import classes from './Layout.css'

 class Layout extends Component{
  state = {
    showSideDrawer: false
  }
  sideDrawerHandler = () =>{
    
    this.setState((prevState) => { return {showSideDrawer : !prevState.showSideDrawer}});
  }
  sideDrawerCloseHandler = () =>{
    this.setState({showSideDrawer : false})
  }
  render (){
    return <Aux>
      <Toolbar toggledrawer={this.sideDrawerHandler}></Toolbar>
      <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}></SideDrawer>
      <main className={classes.Content}>
        {this.props.children}
      </main>
  </Aux>
  }
 } 
   
export default Layout;
