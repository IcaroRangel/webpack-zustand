import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, List, Table, Text } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import api from '../services/api';

type TShirt = {
  id: number;
  name: string;
  price: number;
};

const Shirts = () => {
  const [registerList, setRegisterList] = useState<TShirt[]>([]);

  const list = useCallback(async () => {
    const { data } = await api.get('/shirts');

    setRegisterList(data);
  }, []);

  useEffect(() => {
    list();
  }, [list]);

  return (
    <>
      <Button
        borderRadius={6}
        mb={6}
        p={6}
        color={'#f8f8ff'}
        background={'#111'}
        border={'1px solid #f8f8ff'}
      >
        <Link
          to="/shirts/create-shirt"
          style={{ textDecoration: 'none', color: '#f8f8ff' }}
        >
          Cadastrar camisa
        </Link>
      </Button>

      {registerList.length > 0 && (
        <Table
          border={'1px solid #111'}
          borderRadius={'8'}
          p={'16'}
          w={600}
          background={'#f8fff7'}
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
          {registerList.map(shirt => (
            <List key={shirt.id}>
              <Box display={'flex'} w={'100%'}>
                <Text w={'20%'} m={'6'}>
                  {shirt.id}
                </Text>
                <Text w={'40%'} m={'6'}>
                  {shirt.name}
                </Text>
                <Text w={'20%'} m={'6'}>
                  {shirt.price}
                </Text>
                <Text w={'20%'} m={'6'} display={'flex'} gap={26}>
                  <Link
                    to={`/shirts/update-shirt/${shirt.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <EditIcon color="yellowgreen" />
                  </Link>
                  <Link
                    to={`/shirts/delete-shirt/${shirt.id}`}
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

export default Shirts;
