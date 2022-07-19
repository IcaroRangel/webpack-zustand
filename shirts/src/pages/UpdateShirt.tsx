import { Button, Box } from '@chakra-ui/react';
import Input from '../components/Input';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../services/api';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type TShirt = {
  name: string;
  price: number;
};

const UpdateShirt = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    price: yup.number().required('Preço é obrigátorio'),
  });
  const { register, handleSubmit } = useForm<TShirt>({
    resolver: yupResolver(schema),
  });

  const update = useCallback(async data => {
    await api.put(`/shirts/${id}`, data);
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
        onSubmit={handleSubmit(update)}
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
          color={'#f8f8ff'}
          background={'#111'}
          border={'1px solid #f8f8ff'}
        >
          ENVIAR
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

export default UpdateShirt;
