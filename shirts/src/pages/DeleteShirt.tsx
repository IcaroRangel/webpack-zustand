import { Button, Box, Input } from '@chakra-ui/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

const DeleteShirt = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const destroy = useCallback(async (e, id) => {
    e.preventDefault();
    await api.delete(`/shirts/${id}`);
    navigate('/shirts');
  }, []);

  const show = useCallback(async () => {
    const { data } = await api.get(`/shirts/${id}`);

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
          border: '1px solid #111',
          borderRadius: '8px',
          padding: '16px',
          width: '500px',
          background: '#f8f8ff',
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
          border={'1px solid #111'}
        >
          DELETAR
        </Button>
      </form>
      <Button
        type="submit"
        cursor={'pointer'}
        borderRadius={8}
        p={8}
        m={32}
        color={'#111'}
        background={'#f8f8ff'}
        border={'1px solid #111'}
      >
        <Link to="/shirts" style={{ textDecoration: 'none', color: '#111' }}>
          Voltar
        </Link>
      </Button>
    </>
  );
};

export default DeleteShirt;
