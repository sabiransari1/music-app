import React from "react";
import { Link } from "react-router-dom";
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
} from "@chakra-ui/react";
import logoDark from "../assets/images/logoDark.png";
import logoLight from "../assets/images/logoLight.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      minH={"80px"}
      align={"center"}
      justify={"space-between"}
      pos={"sticky"}
      top={"0"}
      boxShadow={
        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      }
      p={"0 3rem"}
      zIndex={"1"}
    >
      {/* first */}
      <Box display={"none"} border={"1px solid red"}>
        <IconButton icon={<GiHamburgerMenu />} size={"sm"} onClick={onOpen} />

        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody
              p={{
                base: "1rem 1rem",
                sm: "1rem 1rem",
                md: "2rem 2rem",
                lg: "2rem 5rem",
                xl: "2rem 5rem",
                "2xl": "2rem 5rem",
              }}
              bg={colorMode === "light" ? "white" : "black"}
            >
              <Link to={"/"} onClick={onClose}>
                <Text>Home</Text>
              </Link>

              <Link to={"/admin"} onClick={onClose}>
                <Text>Admin</Text>
              </Link>

              <Link to={"/login"} onClick={onClose}>
                <Text>Login</Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>

      {/* second */}
      <Box w={"5%"}>
        <Image
          src={colorMode === "light" ? logoLight : logoDark}
          alt="Logo"
          w={"100%"}
        />
      </Box>

      {/* third */}
      <Flex w={"50%"} justify={"space-between"}>
        <Link to={"/"}>
          <Text>Home</Text>
        </Link>

        <Link to={"/admin"}>
          <Text>Admin</Text>
        </Link>

        <Link to={"/login"}>
          <Text>Login</Text>
        </Link>
      </Flex>

      {/* fifth */}
      <Box>
        <IconButton
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          isRound
          size={"sm"}
          onClick={toggleColorMode}
        />
      </Box>
    </Flex>
  );
};
