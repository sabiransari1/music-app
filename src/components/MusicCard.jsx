import React from 'react';
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';

export const MusicCard = ({
  id,
  name,
  artist,
  genre,
  year,
  no_of_songs,
  img,
  songs,
}) => {
  return (
    <Flex
      p={'.3rem'}
      borderRadius={'5px'}
      direction={'column'}
      boxShadow={
        'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
      }
      align={'center'}
    >
      <Image src={img} alt={name} w={'100%'} />

      <Heading size={'1rem'} align={"center"}>{name}</Heading>

      <Text size={'.5rem'}>{artist}</Text>

      <Text size={'.5rem'}>{year}</Text>
    </Flex>
  );
};
