import React from 'react';
import ReactDOM from 'react-dom';
import Shirts from './Shirts';

import './index.css';

const App = () => (
  <>
    <Shirts />
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
