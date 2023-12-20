import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Flex,
  Box,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useColorMode,
  useDisclosure,
  Text,
  Heading,
} from '@chakra-ui/react';
import logoDark from '../assets/images/logoDark.png';
import logoLight from '../assets/images/logoLight.png';
import { FaSun, FaMoon } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      minH={'8vh'}
      align={'center'}
      justify={'space-between'}
      pos={'sticky'}
      top={'0'}
      boxShadow={
        'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'
      }
      p={'0 3rem'}
      zIndex={'1'}
      bg={'#a0caba'}
    >
      {/* first */}
      <Box display={'none'} border={'1px solid red'}>
        <IconButton icon={<GiHamburgerMenu />} size={'sm'} onClick={onOpen} />

        <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody
              p={{
                base: '1rem 1rem',
                sm: '1rem 1rem',
                md: '2rem 2rem',
                lg: '2rem 5rem',
                xl: '2rem 5rem',
                '2xl': '2rem 5rem',
              }}
              bg={'#a0caba'}
            >
              <Link to={'/'} onClick={onClose}>
                <Text>Home</Text>
              </Link>

              <Link to={'/admin'} onClick={onClose}>
                <Text>Admin</Text>
              </Link>

              <Link to={'/login'} onClick={onClose}>
                <Text>Login</Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* second */}
      <Box w={'7%'}>
        <Link to={'/'}>
          <Image
            src={colorMode === 'light' ? logoLight : logoDark}
            alt="Logo"
            w={'100%'}
          />
        </Link>
      </Box>

      {/* third */}
      <Flex w={'50%'} justify={'space-between'}>
        <Link to={'/'}>
          <Heading size={'0rem'}>Home</Heading>
        </Link>

        <Link to={'/admin'}>
          <Heading size={'0rem'}>Admin</Heading>
        </Link>

        <Link to={'/login'}>
          <Heading size={'0rem'}>Login</Heading>
        </Link>
      </Flex>
    </Flex>
  );
};
