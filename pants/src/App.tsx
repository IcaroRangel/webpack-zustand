import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
// import PantsRoutes from './PantsRoutes';

const App = () => (
  <>
    <BrowserRouter>{/* <PantsRoutes /> */}</BrowserRouter>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
