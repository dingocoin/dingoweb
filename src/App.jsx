import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from './Main';
import Canvas from './Canvas';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/canvas" exact component={() => <Canvas />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
