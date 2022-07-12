import React from 'react';
import ReactDOM from 'react-dom';
//@ts-ignore
import Pants from 'pants/Pants';
//@ts-ignore
import Shirts from 'shirts/Shirts';
//@ts-ignore
import Trolley from 'trolley/Trolley';

import './index.css';

const App = () => (
  <div className="container">
    <Pants />
    <Shirts />
    <Trolley />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
