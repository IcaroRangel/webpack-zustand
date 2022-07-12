import React from 'react';
import { Link } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <>
      <Link href="/">Início</Link>
      <Link href="/pants">Calças</Link>
      <Link href="/shirts">Camisas</Link>
      <Link href="/trolley">Carrinho</Link>
    </>
  );
};

export default NavBar;
