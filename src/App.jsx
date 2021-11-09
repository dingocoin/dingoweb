import './App.scss';
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Main from './Main';
import Canvas from './Canvas';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-210617812-1');
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
