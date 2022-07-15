import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

export const Menu: React.FC = () => {
  return (
    <Box position="sticky" top={0} mx={{ sm: 'auto' }} p={6}>
      <Box>Logo</Box>
      <Box>
        <Heading>Hi intern!</Heading>
        <Text>Welcome to MI 2022 Front-end test</Text>
      </Box>
      <Box>
        <Text>Lets start using The Cat API</Text>
        <SimpleGrid columns={{ sm: 3 }} spacing={{ base: 2, sm: 4 }}>
          <Flex as={Link} direction="column" gap={3} minWidth="140px" href={''}>
            <Box h={200} flexGrow={1} bg="#B4B7FF"></Box>
            <Button>Voting</Button>
          </Flex>
          <Flex as={Link} direction="column" gap={3} minWidth="140px" href={''}>
            <Box h={200} flexGrow={1} bg="#97EAB9"></Box>
            <Button>Breeds</Button>
          </Flex>
          <Flex as={Link} direction="column" gap={3} minWidth="140px" href={''}>
            <Box h={200} flexGrow={1} bg="#FFD280"></Box>
            <Button>Gallery</Button>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
