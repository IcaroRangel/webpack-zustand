import React from 'react';
import ReactDOM from 'react-dom';
import Shirts from './Shirts';

import './index.css';

const App = () => (
  <div className="container">
    <Shirts />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
