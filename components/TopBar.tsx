import NextLink from 'next/link';
import React from 'react';
import { HStack, IconButton, Link } from '@chakra-ui/react';
import { Search } from './Search';
import { DislikeIcon, FavIcon, LikeIcon, SearchIcon } from '../assets/icons';
// import { SearchIcon } from '@chakra-ui/icons';

export const TopBar: React.FC = () => {
  return (
    <HStack spacing={2.5}>
      <Search />
      <NextLink href="/likes" passHref>
        <IconButton
          as={Link}
          size="lg"
          aria-label="Likes"
          icon={<LikeIcon />}
        />
      </NextLink>
      <NextLink href="/favorites" passHref>
        <IconButton
          as={Link}
          size="lg"
          aria-label="Favorites"
          icon={<FavIcon />}
        />
      </NextLink>
      <NextLink href="/dislikes" passHref>
        <IconButton
          as={Link}
          size="lg"
          aria-label="Dislikes"
          icon={<DislikeIcon />}
        />
      </NextLink>
    </HStack>
  );
};
