import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shopPage';
import HeaderComponent from './components/header/header.component';

import {
  HOME,
  SHOP
} from './constants/routing';

import './App.css';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path={HOME} component={HomePage}/>
        <Route exact path={SHOP} component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
