import React from 'react';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
