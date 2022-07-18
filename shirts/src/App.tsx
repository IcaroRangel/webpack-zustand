import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const App = () => (
  <>
    <BrowserRouter></BrowserRouter>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
