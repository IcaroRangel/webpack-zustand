import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Router from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className="component">
        <Router />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
