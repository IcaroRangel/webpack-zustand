import React from 'react';
import { Heading, Button, Image } from '@chakra-ui/react';
import './Pants.css';
import useStore from 'host/store';

const Pants = () => {
  const { setPants } = useStore();

  return (
    <>
      <Heading as="h1" textAlign="center" pb="12" textTransform="uppercase">
        Calças
      </Heading>
      <div className="container-images">
        <div className="container-image">
          <Image
            src="https://dondoca.com.br/wp-content/uploads/2021/03/dondoca_com_br-arquivo-043-15-390x390.jpg"
            alt="Calça azul"
            objectFit="cover"
            boxSize="250px"
          />
          <Button
            onClick={() => {
              setPants();
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>
        <div className="container-image">
          <Image
            src="https://dondoca.com.br/wp-content/uploads/2022/02/dondoca_com_br-img-0490-390x390.jpg"
            alt="Calça roxa"
            objectFit="cover"
            boxSize="250px"
          />
          <Button
            onClick={() => {
              setPants();
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>

        <div className="container-image">
          <Image
            src="https://dondoca.com.br/wp-content/uploads/2021/03/dondoca_com_br-arquivo-025-17-390x390.jpg"
            alt="Calça preta"
            objectFit="cover"
            boxSize="250px"
          />
          <Button
            onClick={() => {
              setPants();
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>
        <div className="container-image">
          <Image
            src="https://dondoca.com.br/wp-content/uploads/2022/01/dondoca_com_br-img-9477-390x390.jpg"
            alt="Calça verde"
            objectFit="cover"
            boxSize="250px"
          />
          <Button
            onClick={() => {
              setPants();
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </>
  );
};

export default Pants;
