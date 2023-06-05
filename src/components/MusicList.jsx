import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getMusic } from "../redux/music/action";
import {
  Center,
  Box,
  Heading,
  SimpleGrid,
  Grid,
  HStack,
} from "@chakra-ui/react";

export const MusicList = memo(() => {
  const dispatch = useDispatch();
  const { isLoading, isError, errMessage, products, totalPage } = useSelector(
    (store) => ({
      isLoading: store.productsReducer.isLoading,
      isError: store.productsReducer.isError,
      errMessage: store.productsReducer.errMessage,
      products: store.productsReducer.products,
      totalPage: store.productsReducer.totalPage,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getMusic());
  }, []);

  return (
    <Center>
      {isLoading ? (
        <Heading>Loading...</Heading>
      ) : isError ? (
        <Heading>{errMessage}</Heading>
      ) : (
        <Box>
          <HStack
            gap={"1rem"}
            columns={{
              base: "1",
              sm: "2",
              md: "3",
              lg: "4",
              xl: "4",
              "2xl": "4",
            }}
          >
            {products?.map((el) => (
              <ProductsCard key={el.id} {...el} handleDelete={handleDelete} />
            ))}
          </HStack>
          <Box mt={"2rem"}>
            <Pagination
              totalPage={Math.ceil(totalPage / 12)}
              page={page}
              handlePage={handlePage}
            />
          </Box>
        </Box>
      )}
    </Center>
  );
});
