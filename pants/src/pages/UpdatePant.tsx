import { Button, Box } from '@chakra-ui/react';
import Input from '../components/Input';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../services/api';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type TPant = {
  name: string;
  price: number;
};

const UpdatePant = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    price: yup.number().required('Preço é obrigátorio'),
  });
  const { register, handleSubmit } = useForm<TPant>({
    resolver: yupResolver(schema),
  });

  const update = useCallback(async data => {
    await api.put(`/pants/${id}`, data);
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
        onSubmit={handleSubmit(update)}
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
            register={register}
            placeholder={'NOME'}
            name={'name'}
            defaultValue={name}
            onChange={e => setName(e.target.value)}
          />
        </Box>
        <Box h={'20%'} p={16}>
          <Input
            register={register}
            placeholder={'PREÇO'}
            name={'price'}
            defaultValue={price}
            onChange={e => setPrice(e.target.value)}
          />
        </Box>
        <Button
          type="submit"
          cursor={'pointer'}
          borderRadius={8}
          p={12}
          m={16}
          color={'#111'}
          background={'#00ff7f'}
          border={'none'}
        >
          ENVIAR
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

export default UpdatePant;
