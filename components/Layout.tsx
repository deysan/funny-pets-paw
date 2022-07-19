import { Box, Container, SimpleGrid } from '@chakra-ui/react';

import { Main } from './Main';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{ lg: 2 }} spacing={3} alignItems="start" h="100vh">
        <Main />
        <Box h="100%" p={6} overflowY="hidden">
          {children}
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Layout;
