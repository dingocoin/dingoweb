import './App.scss';
import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Main from './Main';
import Canvas from './Canvas';

function App() {
  return (
    <div className="App">
      <HashRouter baseName="/">
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/canvas" exact component={() => <Canvas />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
