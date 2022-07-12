import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Router from './routes';

const App = () => (
  <>
    <NavBar />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </>
);

ReactDOM.render(<App />, document.getElementById('app'));
