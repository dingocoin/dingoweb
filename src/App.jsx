import './App.scss';
import React from 'react';

import Main from './Main';
import ReactGA from 'react-ga';

// Routing.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  ReactGA.initialize('UA-210617812-1');
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Main/>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
