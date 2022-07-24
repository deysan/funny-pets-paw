import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { breeds, gallery, voting } from '../public/images';

import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import logo from '../public/logo.svg';
import { useRouter } from 'next/router';

export const Main: React.FC = () => {
  const { pathname } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const path = pathname.replace('/', '');

  return (
    <Box
      position="sticky"
      top={6}
      display="flex"
      flexDirection="column"
      gap={10}
      mx={{ sm: 'auto' }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <NextLink href="/" passHref>
          <Box as={Link}>
            <Image src={logo} width={106} height={24} alt="logo" />
          </Box>
        </NextLink>
        <Switch
          colorScheme="red"
          onChange={toggleColorMode}
          isChecked={colorMode === 'dark'}
        />
      </Flex>
      <Box>
        <Heading>Hi intern!</Heading>
        <Text color="var(--color-bg-text)">
          Welcome to MI 2022 Front-end test
        </Text>
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
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={200}
                bgColor="var(--color-blue)"
                border={`4px solid ${
                  path === 'voting'
                    ? 'var(--color-bg-red)'
                    : 'rgba(255, 255, 255, 0.6)'
                }`}
                borderRadius={20}
                _groupHover={{ borderColor: path !== 'voting' && 'white' }}
              >
                <Image src={voting} width={100} height={125} alt="voting" />
              </Box>
              <Button
                size="sm"
                isActive={path === 'voting'}
                _groupHover={{
                  bgColor: path !== 'voting' && 'var(--color-bg-red)',
                }}
              >
                Voting
              </Button>
            </Flex>
          </NextLink>
          <NextLink href="/breeds" passHref>
            <Flex
              as={Link}
              direction="column"
              gap={3}
              minWidth="140px"
              role="group"
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={200}
                bgColor="var(--color-green)"
                border={`4px solid ${
                  path === 'breeds'
                    ? 'var(--color-bg-red)'
                    : 'rgba(255, 255, 255, 0.6)'
                }`}
                borderRadius={20}
                _groupHover={{ borderColor: path !== 'breeds' && 'white' }}
              >
                <Image src={breeds} width={117} height={163} alt="breeds" />
              </Box>
              <Button
                size="sm"
                isActive={path === 'breeds'}
                _groupHover={{
                  bgColor: path !== 'breeds' && 'var(--color-bg-red)',
                }}
              >
                Breeds
              </Button>
            </Flex>
          </NextLink>
          <NextLink href="/gallery" passHref>
            <Flex
              as={Link}
              direction="column"
              gap={3}
              minWidth="140px"
              role="group"
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={200}
                bgColor="var(--color-yellow)"
                border={`4px solid ${
                  path === 'gallery'
                    ? 'var(--color-bg-red)'
                    : 'rgba(255, 255, 255, 0.6)'
                }`}
                borderRadius={20}
                _groupHover={{ borderColor: path !== 'gallery' && 'white' }}
              >
                <Image src={gallery} width={117} height={163} alt="gallery" />
              </Box>
              <Button
                size="sm"
                isActive={path === 'gallery'}
                _groupHover={{
                  bgColor: path !== 'gallery' && 'var(--color-bg-red)',
                }}
              >
                Gallery
              </Button>
            </Flex>
          </NextLink>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
