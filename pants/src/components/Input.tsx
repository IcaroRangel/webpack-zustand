import React, { InputHTMLAttributes } from 'react';
import { Input } from '@chakra-ui/react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, name, register, required, defaultValue }, ref) => {
    return (
      <>
        <Input
          h={'100%'}
          w={'50%'}
          borderRadius={8}
          p={4}
          ref={ref}
          placeholder={placeholder}
          defaultValue={defaultValue}
          type={type}
          {...register(name, { required })}
        />
      </>
    );
  }
);

export default InputComponent;
