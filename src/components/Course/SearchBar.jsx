import React, { useState } from 'react';
import { InputGroup, InputLeftElement, Input, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <Box textAlign="center" mb={4} p={2} border="1px solid #E2E8F0" borderRadius="md">
      <InputGroup w="300px" m="auto">
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input
          type="text"
          placeholder="Search courses..."
          value={query}
          onChange={handleChange}
          border="none"
          _focus={{ border: 'none', boxShadow: 'none' }}
          _placeholder={{ color: 'gray.500' }}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
