import React from 'react';
import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import { Main } from './Main';
import { TopBar } from './TopBar';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <Container maxW="container.xl">
      <SimpleGrid
        columns={{ lg: 2 }}
        spacing={3}
        alignItems="start"
        minHeight="100vh"
      >
        <Main />
        <Box
          height="100%"
          p={6}
          overflowY={pathname === '/' ? 'hidden' : 'visible'}
        >
          {pathname === '/' ? (
            children
          ) : (
            <Box display="flex" flexDirection="column" gap={2.5} height="100%">
              <TopBar />
              <Box
                display="flex"
                flexDirection="column"
                height="100%"
                gap={5}
                p={5}
                bgColor="white"
              >
                {children}
              </Box>
            </Box>
          )}
        </Box>
      </SimpleGrid>
    </Container>
  );
};
