import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import { HOME } from './constants/routing';

import './App.css';

function App() {
  return (
    <div>
      <Route exact path={HOME} component={HomePage}/>
    </div>
  );
}

export default App;
