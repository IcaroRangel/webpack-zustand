import React from 'react';
import { Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <Container className="container">
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/pants">Calças</Link>
        </li>
        <li>
          <Link to="/shirts">Camisas</Link>
        </li>
        <li>
          <Link to="/trolley">Carrinho</Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
