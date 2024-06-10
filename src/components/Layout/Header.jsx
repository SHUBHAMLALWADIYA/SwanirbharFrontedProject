// Header.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { LoginlogoutContext } from "../../context/LoginlogoutContext";

const Header = () => {
  const { toggle } = useContext(LoginlogoutContext);

  return (
    <Box bg="teal" p="4" position="fixed" width="100%" zIndex="999">
      <Flex alignItems="center">
        <Heading as="h1" size="md" color="white" mr="4">
          LMS Dashboard
        </Heading>
        <Spacer />
        <Box>
          <ChakraLink color="white" as={Link} to="/profile" mr="4">
            Profile
          </ChakraLink>

          <ChakraLink color="white" as={Link} to="/login" mr="4">
            Login
          </ChakraLink>
          <ChakraLink color="white" as={Link} to="/signup">
            Signup
          </ChakraLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

