import React, { useState } from 'react';
import { Box, Button, Flex, Input, VStack, useToast } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authentication/action';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toast = useToast();

  const dispatch = useDispatch();

  const { isAuth, isError, errMessage } = useSelector((store) => {
    return {
      isAuth: store.authentication.isAuth,
      isError: store.authentication.isError,
      errMessage: store.authentication.errMessage,
    };
  }, shallowEqual);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: 'Please Fill Your Email',
        status: 'info',
        duration: 1000,
        position: 'top',
      });
      return;
    } else if (!password) {
      toast({
        title: 'Please Fill Your Password',
        status: 'info',
        duration: 1000,
        position: 'top',
      });
      return;
    }

    dispatch(login({ email, password }, toast)).then((res) => {
      if (res === 200) {
        toast({
          title: 'Login successful',
          status: 'success',
          duration: 1000,
          position: 'top',
        });
      } else {
        toast({
          title: 'Something went wrong, Try again',
          status: 'warning',
          duration: 1000,
          position: 'top',
        });
      }
    });
  };

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Flex justify={'center'} align={'center'} minW={'100wh'} minH={'92vh'}>
        <form onSubmit={handleLogin}>
          <VStack>
            <Input
              type="email"
              placeholder="Enter Your Email..."
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Enter Your Password..."
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" bgColor={'#a0caba'} w={'100%'}>
              Login
            </Button>
          </VStack>
        </form>
      </Flex>
    </Box>
  );
};
