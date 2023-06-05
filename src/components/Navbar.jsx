import React from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box>
      <Link to={"/"}>
        <Text>Home</Text>
      </Link>

      <Link to={"/admin"}>
        <Text>Admin</Text>
      </Link>

      <Link to={"/login"}>
        <Text>Login</Text>
      </Link>
    </Box>
  );
};
