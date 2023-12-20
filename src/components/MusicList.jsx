// import React, { memo, useEffect } from 'react';
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import {
//   Center,
//   Box,
//   Heading,
//   SimpleGrid,
//   Grid,
//   HStack,
// } from '@chakra-ui/react';
// import { MusicCard } from './MusicCard';

// export const MusicList = ({ isLoading, isError, errMessage, albums }) => {
//   return (
//     <Center border={'1px solid red'}>
//       {isLoading ? (
//         <Heading>Loading...</Heading>
//       ) : isError ? (
//         <Heading>{errMessage}</Heading>
//       ) : (
//         <Box>
//           <Grid templateColumns={'repeat(3,1fr)'} gap={'1rem'}>
//             {albums?.map((item) => (
//               <MusicCard key={item.id} {...item} />
//             ))}
//           </Grid>
//         </Box>
//       )}
//     </Center>
//   );
// };
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  Center,
  Box,
  Heading,
  SimpleGrid,
  Grid,
  HStack,
} from '@chakra-ui/react';
import { MusicCard } from './MusicCard';

export const MusicList = ({ albums }) => {
  return (
    <Box minW={'100%'} p={'3rem'}>
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          sm: 'repeat(2,1fr)',
          md: 'repeat(3,1fr)',
          lg: 'repeat(4,1fr)',
          xl: 'repeat(4,1fr)',
          '2xl': 'repeat(5,1fr)',
        }}
        gap={'1rem'}
      >
        {albums?.map((item) => (
          <MusicCard key={item.id} {...item} />
        ))}
      </Grid>
    </Box>
  );
};
