import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
          <Route path='/checkout' component={Checkout}></Route>
          <Route path = '/' exact component={BurgerBuilder}></Route>
      </Layout>
    </div>
  );
}

export default App;
