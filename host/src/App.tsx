import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Router from './routes';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Box display={'flex'}>
        <Box>
          <Menu />
        </Box>
        <Box ml={124}>
          <Router />
        </Box>
      </Box>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
