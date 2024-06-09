import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      position="absolute"
      left="0"
      bottom="0"
      width="100%"
      bg="gray.800"
      color="white"
      textAlign="center"
      p="4"
    >
      <Text>© {new Date().getFullYear()} LMS Dashboard. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
