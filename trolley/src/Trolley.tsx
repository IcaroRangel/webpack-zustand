import React, { useEffect, useState } from 'react';
//@ts-ignore
import useStore from 'host/store';
import { Button } from '@chakra-ui/react';
import './Trolley.css';

const Trolley = () => {
  const {
    trolley,
    shirts,
    pants,
    clearTrolley,
    clearShirts,
    clearPants,
    setTrolley,
  } = useStore();

  useEffect(() => {
    setTrolley();
  }, [shirts, pants]);

  return (
    <div className="infos">
      <div>
        <p>Carrinho: {trolley}</p>
        <Button className="clear" onClick={() => clearTrolley()}>
          Esvaziar carrinho
        </Button>
      </div>
      <div>
        <p>Camisas: {shirts}</p>
        <Button className="clear" onClick={() => clearShirts()}>
          Esvaziar camisas
        </Button>
      </div>
      <div>
        <p>Calças: {pants}</p>
        <Button className="clear" onClick={() => clearPants()}>
          Esvaziar calças
        </Button>
      </div>
    </div>
  );
};

export default Trolley;
