import { Button, Heading, Box } from '@chakra-ui/react';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import api from '../services/api';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type TShirt = {
  name: string;
  price: number;
};

const CreateShirt = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    price: yup.number().required('Preço é obrigátorio'),
  });
  const { register, handleSubmit } = useForm<TShirt>({
    resolver: yupResolver(schema),
  });

  const create = useCallback(async data => {
    await api.post('/shirts', data);
    navigate('/shirts');
  }, []);

  return (
    <>
      <Heading as="h1" textAlign="center" pb="12" textTransform="uppercase">
        Cadastrar camisa
      </Heading>
      <form
        onSubmit={handleSubmit(create)}
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
          <Input register={register} placeholder={'NOME'} name={'name'} />
        </Box>
        <Box h={'20%'} p={16}>
          <Input register={register} placeholder={'PREÇO'} name={'price'} />
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

export default CreateShirt;
