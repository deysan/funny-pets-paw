import React from 'react';
import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { Menu } from './Menu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={{ lg: 2 }} spacing={3} alignItems="start" h="100vh">
        <Menu />
        <Box h="100%" p={6}>
          {children}
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Layout;
