import React from 'react';
import { Container, Link } from '@chakra-ui/react';
import './NavBar.css';

const NavBar = () => {
  return (
    <Container className="container">
      <ul>
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/pants">Calças</Link>
        </li>
        <li>
          <Link href="/shirts">Camisas</Link>
        </li>
        <li>
          <Link href="/trolley">Carrinho</Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
