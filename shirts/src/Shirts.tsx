import React from 'react';
import { Heading, Button, Image } from '@chakra-ui/react';
import './Shirts.css';
import useStore from 'host/store';

const Shirts = () => {
  const { setShirts } = useStore();
  return (
    <>
      <Heading as="h1" textAlign="center" pb="12" textTransform="uppercase">
        Camisas
      </Heading>
      <div className="container-images">
        <div className="container-image">
          <Image
            src="https://citerol.vteximg.com.br/arquivos/ids/167873-1000-1000/1_CAMISETA_BASIC_UNISSEX_PRETA.jpg?v=637213490487000000"
            alt="Camisa azul"
            objectFit="cover"
            boxSize="250px"
            border="1px solid #18ab29"
          />
          <Button
            onClick={() => {
              setShirts();
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>
        <div className="container-image">
          <Image
            src="https://citerol.vteximg.com.br/arquivos/ids/167869-1000-1000/1_CAMISETA_BASIC_UNISSEX_BRANCA.jpg?v=637213484248570000"
            alt="Camisa branca"
            objectFit="cover"
            boxSize="250px"
            border="1px solid #18ab29"
          />
          <Button
            onClick={() => {
              setShirts();
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>

        <div className="container-image">
          <Image
            src="https://citerol.vteximg.com.br/arquivos/ids/170257-230-230/05.03.0002006001.jpg?v=637729210139430000"
            alt="Camisa vermelha"
            objectFit="cover"
            boxSize="250px"
            border="1px solid #18ab29"
          />
          <Button
            onClick={() => {
              setShirts();
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>
        <div className="container-image">
          <Image
            src="https://citerol.vteximg.com.br/arquivos/ids/167872-1000-1000/1_CAMISETA_BASIC_UNISSEX_AZUL_MAR.jpg?v=637213489108800000"
            alt="Camisa azul"
            objectFit="cover"
            boxSize="250px"
            border="1px solid #18ab29"
          />
          <Button
            onClick={() => {
              setShirts();
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </>
  );
};

export default Shirts;
