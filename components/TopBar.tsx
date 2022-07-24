import NextLink from 'next/link';
import React from 'react';
import { HStack, IconButton, Link } from '@chakra-ui/react';
import { Search } from './Search';
import { DislikeIcon, FavFillIcon, FavIcon, LikeIcon } from './icons';
import { useRouter } from 'next/router';

export const TopBar: React.FC = () => {
  const { pathname } = useRouter();

  const path = pathname.replace('/', '');

  return (
    <HStack spacing={2.5}>
      <Search />
      <NextLink href="/likes" passHref>
        <IconButton
          as={Link}
          size="lg"
          aria-label="Likes"
          icon={<LikeIcon w={7} h={7} />}
          isActive={path === 'likes'}
        />
      </NextLink>
      <NextLink href="/favorites" passHref>
        <IconButton
          as={Link}
          size="lg"
          aria-label="Favorites"
          icon={
            path === 'favorites' ? (
              <FavFillIcon w={7} h={7} />
            ) : (
              <FavIcon w={7} h={7} />
            )
          }
          isActive={path === 'favorites'}
        />
      </NextLink>
      <NextLink href="/dislikes" passHref>
        <IconButton
          as={Link}
          size="lg"
          aria-label="Dislikes"
          icon={<DislikeIcon w={7} h={7} />}
          isActive={path === 'dislikes'}
        />
      </NextLink>
    </HStack>
  );
};
