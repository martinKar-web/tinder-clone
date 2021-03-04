import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am a chatpage</h1>
          </Route>
          {/* you always want to have your default route at the bottom */}
          <Route path="/">
            <TinderCards />
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;