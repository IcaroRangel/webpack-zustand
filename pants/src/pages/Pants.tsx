import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, Heading, List, Table, Text } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import api from '../services/api';

type TPant = {
  id: number;
  name: string;
  price: number;
};

const Pants = () => {
  const [registerList, setRegisterList] = useState<TPant[]>([]);

  const list = useCallback(async () => {
    const { data } = await api.get('/pants');

    setRegisterList(data);
  }, []);

  useEffect(() => {
    list();
  }, [list]);

  return (
    <>
      <Heading as="h1" textAlign="center" pb="12" textTransform="uppercase">
        Calças
      </Heading>
      <Button
        borderRadius={6}
        mb={6}
        p={6}
        color={'#f8f8ff'}
        background={'#111'}
        border={'1px solid #f8f8ff'}
      >
        <Link
          to="/pants/create-pant"
          style={{ textDecoration: 'none', color: '#f8f8ff' }}
        >
          Cadastrar calça
        </Link>
      </Button>

      {registerList.length > 0 && (
        <Table
          border={'1px solid #111'}
          borderRadius={'8'}
          p={'16'}
          w={600}
          background={'#f8f8ff'}
        >
          <Box display={'flex'} w={'100%'}>
            <Text w={'20%'} m={'6'} fontWeight={'bold'}>
              ID
            </Text>
            <Text w={'40%'} m={'6'} fontWeight={'bold'}>
              NOME
            </Text>
            <Text w={'20%'} m={'6'} fontWeight={'bold'}>
              PREÇO
            </Text>
            <Text w={'20%'} m={'6'} fontWeight={'bold'}>
              AÇÕES
            </Text>
          </Box>
          {registerList.map(pant => (
            <List key={pant.id}>
              <Box display={'flex'} w={'100%'}>
                <Text w={'20%'} m={'6'}>
                  {pant.id}
                </Text>
                <Text w={'40%'} m={'6'}>
                  {pant.name}
                </Text>
                <Text w={'20%'} m={'6'}>
                  {pant.price}
                </Text>
                <Text w={'20%'} m={'6'} display={'flex'} gap={26}>
                  <Link
                    to={`/pants/update-pant/${pant.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <EditIcon color="yellowgreen" />
                  </Link>
                  <Link
                    to={`/pants/delete-pant/${pant.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <DeleteIcon color="tomato" />
                  </Link>
                </Text>
              </Box>
            </List>
          ))}
        </Table>
      )}
    </>
  );
};

export default Pants;
