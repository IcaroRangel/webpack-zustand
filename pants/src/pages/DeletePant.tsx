import { Button, Box, Input } from '@chakra-ui/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

const DeletePant = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const destroy = useCallback(async (e, id) => {
    e.preventDefault();
    await api.delete(`/pants/${id}`);
    navigate('/pants');
  }, []);

  const show = useCallback(async () => {
    const { data } = await api.get(`/pants/${id}`);

    setName(data.name);
    setPrice(data.price);
  }, []);

  useEffect(() => {
    show();
  }, []);

  return (
    <>
      <form
        onSubmit={e => destroy(e, id)}
        style={{
          border: '1px solid #00ff7f',
          borderRadius: '8px',
          padding: '16px',
          width: '500px',
          background: '#f8fff7',
          height: '200px',
        }}
      >
        <Box h={'20%'} p={16}>
          <Input
            name={'name'}
            placeholder={name}
            disabled={true}
            h={'100%'}
            w={'50%'}
            borderRadius={8}
            p={4}
          />
        </Box>
        <Box h={'20%'} p={16}>
          <Input
            name={'price'}
            placeholder={price}
            disabled={true}
            h={'100%'}
            w={'50%'}
            borderRadius={8}
            p={4}
          />
        </Box>
        <Button
          type="submit"
          cursor={'pointer'}
          borderRadius={8}
          p={12}
          m={16}
          color={'#111'}
          background={'tomato'}
          border={'none'}
        >
          DELETAR
        </Button>
      </form>
      <Link to="/pants" style={{ textDecoration: 'none' }}>
        <Button
          type="submit"
          cursor={'pointer'}
          borderRadius={8}
          p={8}
          m={32}
          background={'#111'}
          border={'1px solid #f8fff7'}
          color={'#f8fff7'}
        >
          VOLTAR
        </Button>
      </Link>
    </>
  );
};

export default DeletePant;
