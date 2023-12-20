import React, { useEffect, useState } from 'react';
import { Box, Center, Grid, Heading, Skeleton, Stack } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { getMusic } from '../redux/music/action';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { MusicList } from '../components/MusicList';
import { Footer } from '../components/Footer';

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const Home = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const { isLoading, isError, errMessage, albums } = useSelector((store) => {
    return {
      isLoading: store.music.isLoading,
      isError: store.music.isError,
      errMessage: store.music.errMessage,
      albums: store.music.albums,
    };
  }, shallowEqual);

  const queryParams = {
    params: {
      _page: page,
      _limit: 12,
    },
  };

  useEffect(() => {
    dispatch(getMusic(queryParams));
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', async () => {
      try {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          setPage((prev) => (prev += 1));
        }
      } catch (error) {
        console.log(error);
      }
    });

    // return window.removeEventListener('scroll', handleInfiniteScroll);
  });

  console.log(page);
  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      {isLoading ? (
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
          p={'3rem'}
        >
          {skeleton?.map((item) => (
            <Stack key={item}>
              <Skeleton height="200px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          ))}
        </Grid>
      ) : isError ? (
        <Heading>{errMessage}</Heading>
      ) : (
        <MusicList albums={albums} />
      )}

      {/* 3 */}
      <Footer />
    </Box>
  );
};
