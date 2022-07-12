import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Pants from './Pants';

const App = () => (
  <div className="container">
    <Pants />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
