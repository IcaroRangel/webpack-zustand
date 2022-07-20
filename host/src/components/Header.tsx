import React from 'react';
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Container
      ml={124}
      mr={124}
      mb={16}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-around '}
      borderBottom={'1px solid #00ff7f'}
    >
      <Image
        src="https://media.istockphoto.com/vectors/nature-house-symbol-template-design-vector-emblem-design-concept-vector-id801722554?k=20&m=801722554&s=170667a&w=0&h=4d6NczmVbzcs-wRP3lZhLjYJMfxKeSNPrx6d0OGIy7k="
        alt="Logo"
        w={115}
        h={75}
        borderRadius={12}
        pb={8}
        pt={8}
      />
      <Heading textAlign={'center'} as={'h1'} textTransform={'uppercase'}>
        Produtos
      </Heading>
      <Box display={'flex'} alignItems={'center'} gap={6}>
        <Image
          src="https://st4.depositphotos.com/1012074/20946/v/450/depositphotos_209469984-stock-illustration-flat-isolated-vector-illustration-icon.jpg"
          alt="Imagem génerica"
          borderRadius={'50%'}
          w={50}
          h={50}
          border={'1px solid #00ff7f'}
        />
        <Text>Icaro</Text>
      </Box>
    </Container>
  );
};

export default Header;
