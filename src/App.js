import React from 'react';
import {Route} from 'react-router-dom';
import Orders from '../src/container/Orders/Orders';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
          <Route path='/checkout' component={Checkout}></Route>
          <Route path='/orders' component={Orders}></Route>
          <Route path = '/' exact component={BurgerBuilder}></Route>
      </Layout>
    </div>
  );
}

export default App;
