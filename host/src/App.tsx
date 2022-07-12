import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Router from './routes';

const App = () => (
  <div className="app">
    <NavBar />
    <div className="component">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
