import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shopPage';
import HeaderComponent from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component';

import {
  HOME,
  SHOP,
  AUTH
} from './constants/routing';

import './App.css';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route exact path={SHOP} component={ShopPage} />
        <Route exact path={AUTH} component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
