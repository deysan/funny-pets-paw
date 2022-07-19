import { Box } from '@chakra-ui/react';
import React from 'react';
import { Search } from './Search';

export const TopBar: React.FC = () => {
  return (
    <Box>
      <Search />
    </Box>
  );
};
