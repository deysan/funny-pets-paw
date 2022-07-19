import {
  Box,
  Button,
  Flex,
  Heading,
  Link as LinkType,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { breeds, gallery, voting } from '../public/img';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../public/logo.svg';

export const Main: React.FC = () => {
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
      <Box>
        <Link href="/">
          <Box as={LinkType}>
            <Image src={logo} width={106} height={24} alt="logo" />
          </Box>
        </Link>
      </Box>
      <Box>
        <Heading>Hi intern!</Heading>
        <Text>Welcome to MI 2022 Front-end test</Text>
      </Box>
      <Box>
        <Text>Lets start using The Cat API</Text>
        <SimpleGrid columns={{ sm: 3 }} spacing={{ base: 2, sm: 4 }}>
          <Link href="/voting">
            <Flex
              as={LinkType}
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
                _groupHover={{ borderColor: '#ffffff' }}
                // _active={{ borderColor: 'var(--color-bg-red)' }}
              >
                <Image src={voting} width={100} height={125} alt="voting" />
              </Box>
              <Button>Voting</Button>
            </Flex>
          </Link>
          <Link href="/breeds">
            <Flex
              as={LinkType}
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
                _groupHover={{ borderColor: '#ffffff' }}
                // _active={{ borderColor: 'var(--color-bg-red)' }}
              >
                <Image src={breeds} width={117} height={163} alt="breeds" />
              </Box>
              <Button>Breeds</Button>
            </Flex>
          </Link>
          <Link href="/gallery">
            <Flex
              as={LinkType}
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
                _groupHover={{ borderColor: '#ffffff' }}
                // _active={{ borderColor: 'var(--color-bg-red)' }}
              >
                <Image src={gallery} width={117} height={163} alt="gallery" />
              </Box>
              <Button>Gallery</Button>
            </Flex>
          </Link>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
