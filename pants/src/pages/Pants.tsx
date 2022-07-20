import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, List, Table, Text } from '@chakra-ui/react';
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
      {registerList.length > 0 && (
        <Table
          border={'1px solid #00ff7f'}
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
                    <EditIcon color="#1374bb" />
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
      <Link
        to="/pants/create-pant"
        style={{ textDecoration: 'none', color: '#f8fff7' }}
      >
        <Button
          borderRadius={6}
          mt={6}
          p={6}
          color={'#f8fff7'}
          background={'#111'}
          border={'1px solid #f8fff7'}
          cursor={'pointer'}
        >
          CADASTRAR CALÇA
        </Button>
      </Link>
    </>
  );
};

export default Pants;
