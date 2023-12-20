import React from 'react'
import { Box, Center} from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Box
      boxShadow={
        'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'
      }
      p={'1rem 3rem'}
    >
      <Center>
        Designed and build by Sabir Ansari, 2023 All rights reserved.
      </Center>
    </Box>
  );
}
