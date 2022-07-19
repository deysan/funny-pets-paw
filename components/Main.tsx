import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { breeds, gallery, voting } from '../assets/img';

import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import logo from '../public/logo.svg';

export const Main: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="sticky"
      top={0}
      display="flex"
      flexDir="column"
      gap={10}
      mx={{ sm: 'auto' }}
      p={6}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <NextLink href="/" passHref>
          <Box as={Link}>
            <Image src={logo} width={106} height={24} alt="logo" />
          </Box>
        </NextLink>
        <Button onClick={toggleColorMode}>Toggle</Button>
      </Flex>
      <Box>
        <Heading>Hi intern!</Heading>
        <Text>Welcome to MI 2022 Front-end test</Text>
      </Box>
      <Box>
        <Text>Lets start using The Cat API</Text>
        <SimpleGrid columns={{ sm: 3 }} spacing={{ base: 6, sm: 4 }}>
          <NextLink href="/voting" passHref>
            <Flex
              as={Link}
              direction="column"
              gap={3}
              minWidth="140px"
              role="group"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h={200}
                bg="var(--color-blue)"
                border="4px solid rgba(255, 255, 255, 0.6)"
                _groupHover={{ borderColor: 'white' }}
                // _active={{ borderColor: 'var(--color-bg-red)' }}
              >
                <Image src={voting} width={100} height={125} alt="voting" />
              </Box>
              <Button>Voting</Button>
            </Flex>
          </NextLink>
          <NextLink href="/breeds" passHref>
            <Flex
              as={Link}
              direction="column"
              gap={3}
              minWidth="140px"
              role="group"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h={200}
                bg="var(--color-green)"
                border="4px solid rgba(255, 255, 255, 0.6)"
                _groupHover={{ borderColor: 'white' }}
                // _active={{ borderColor: 'var(--color-bg-red)' }}
              >
                <Image src={breeds} width={117} height={163} alt="breeds" />
              </Box>
              <Button>Breeds</Button>
            </Flex>
          </NextLink>
          <NextLink href="/gallery" passHref>
            <Flex
              as={Link}
              direction="column"
              gap={3}
              minWidth="140px"
              role="group"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h={200}
                bg="var(--color-yellow)"
                border="4px solid rgba(255, 255, 255, 0.6)"
                _groupHover={{ borderColor: 'white' }}
                // _active={{ borderColor: 'var(--color-bg-red)' }}
              >
                <Image src={gallery} width={117} height={163} alt="gallery" />
              </Box>
              <Button>Gallery</Button>
            </Flex>
          </NextLink>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
