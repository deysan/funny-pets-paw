import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import Image from 'next/image';
import React from 'react';
import breedsImg from '../public/breeds.png';
import galleryImg from '../public/gallery.png';
import logoImg from '../public/logo.svg';
import votingImg from '../public/voting.png';

export const Menu: React.FC = () => {
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
        <Image src={logoImg} width={106} height={24} alt="logo" />
      </Box>
      <Box>
        <Heading>Hi intern!</Heading>
        <Text>Welcome to MI 2022 Front-end test</Text>
      </Box>
      <Box>
        <Text>Lets start using The Cat API</Text>
        <SimpleGrid columns={{ sm: 3 }} spacing={{ base: 2, sm: 4 }}>
          <Flex
            as={Link}
            direction="column"
            gap={3}
            minWidth="140px"
            href={''}
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
              <Image
                src={votingImg}
                width={100}
                height={125}
                alt="voting"
                placeholder="blur"
              ></Image>
            </Box>
            <Button>Voting</Button>
          </Flex>
          <Flex
            as={Link}
            direction="column"
            gap={3}
            minWidth="140px"
            href={''}
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
              <Image
                src={breedsImg}
                width={117}
                height={163}
                alt="breeds"
                placeholder="blur"
              ></Image>
            </Box>
            <Button>Breeds</Button>
          </Flex>
          <Flex
            as={Link}
            direction="column"
            gap={3}
            minWidth="140px"
            href={''}
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
              <Image
                src={galleryImg}
                width={117}
                height={163}
                alt="gallery"
                placeholder="blur"
              ></Image>
            </Box>
            <Button>Gallery</Button>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
