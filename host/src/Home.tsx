import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <>
      <Heading textAlign="center" as="h1">
        Home
      </Heading>
      <Text fontSize="18" m="12">
        Bem-vindo a minha aplicação React com micro-frontends, utilizando
        webpack e zustand.
      </Text>
    </>
  );
};

export default Home;
