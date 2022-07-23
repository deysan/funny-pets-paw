import React from 'react';
import { Box, Text, useColorMode } from '@chakra-ui/react';

export const NotFound: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={5}
      bgColor={
        colorMode === 'light' ? 'var(--color-white)' : 'var(--color-bg-black)'
      }
      borderRadius={10}
    >
      <Text color="var(--color-bg-text)">No item found</Text>
    </Box>
  );
};
