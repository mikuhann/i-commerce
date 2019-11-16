import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shopPage';

import {
  HOME,
  SHOP
} from './constants/routing';

import './App.css';

function App() {
  return (
    <div>
      <Route exact path={HOME} component={HomePage}/>
      <Route exact path={SHOP} component={ShopPage} />
    </div>
  );
}

export default App;
