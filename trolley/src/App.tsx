import React from 'react';
import ReactDOM from 'react-dom';
import Trolley from './Trolley';

import './index.css';

const App = () => (
  <div className="container">
    <Trolley />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
