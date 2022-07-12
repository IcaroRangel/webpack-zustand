import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Router from './routes';
import useStore from './store';

const App = () => {
  //@ts-ignore
  const { trolley } = useStore();

  console.log(trolley);

  return (
    <div className="app">
      <NavBar />
      <div className="component">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
