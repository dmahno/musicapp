import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { Button, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import { authorization } from '../api/authorization';

type IAuthorizationProps = {
  mode: 'signup' | 'signin';
};

export const Authorization = ({ mode }: IAuthorizationProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await authorization(mode, { email, password });
    setIsLoading(false);
    router.push('/');
  };

  return (
    <Box sx={{ height: '100vh', width: '100vw', bg: 'black', color: 'white' }}>
      <Flex sx={{ justify: 'center', align: 'center', height: 'calc(100vh - 100px)' }}>
        <Box sx={{ padding: '50px', bg: 'gray.900', borderRadius: '6px' }}>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Email" type="email" value={email} onChange={validateEmail} />
            <Input placeholder="Password" type="password" value={password} onChange={validatePassword} />
            <Button sx={{ bg: 'green.500', '&hover': { bg: 'green.400' } }} type="submit" isLoading={isLoading}>
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
