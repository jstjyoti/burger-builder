import React from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
        <Checkout></Checkout>
      </Layout>
    </div>
  );
}

export default App;
