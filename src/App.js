import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shopPage';
import HeaderComponent from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component';

import { firebaseAuth, createUserProfile } from './firebase/firebase.utils';

import {
  HOME,
  SHOP,
  AUTH
} from './constants/routing';

import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
        const signinUser = await createUserProfile(user);

        signinUser.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(user)
      }
    });
  }, [currentUser]);

  return (
    <div>
      <HeaderComponent currentUser={currentUser} />
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route exact path={SHOP} component={ShopPage} />
        <Route exact path={AUTH} component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
