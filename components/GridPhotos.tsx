import NextLink from 'next/link';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Breed, Favorite } from '../models';
import { NotFound } from './NotFound';
import {
  Badge,
  Box,
  Grid,
  GridItem,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Spinner,
  useColorMode,
} from '@chakra-ui/react';
import { FavFillIcon, FavIcon } from './icons';
import api from '../config';
import { user } from '../utils';

interface GridPhotosProps {
  info?: boolean;
  like?: boolean;
  breeds: Breed[];
  isLoading: boolean;
}

const doubleCol = [3, 8, 13, 18];
const doubleRow = [0, 3, 7, 8, 10, 13, 17, 18];

export const GridPhotos: React.FC<GridPhotosProps> = ({
  info,
  like,
  breeds,
  isLoading,
}) => {
  const { colorMode } = useColorMode();

  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const userId = useMemo(() => user(), []);

  const favIds = useMemo(
    () => favorites.map((fav) => fav.image_id),
    [favorites],
  );

  const getFavorites = useCallback(() => {
    api.get<Favorite[]>('/favourites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const handleFavorite = useCallback(
    (imageId: string) => {
      if (favIds.includes(imageId)) {
        const favId = favorites.filter((fav) => fav.image_id === imageId);

        api.delete(`/favourites/${favId[0].id}`).then((res) => {
          if (res.data.message === 'SUCCESS') {
            getFavorites();
          }
        });
      } else {
        api
          .post('/favourites', { image_id: imageId, sub_id: userId })
          .then((res) => {
            if (res.data.message === 'SUCCESS') {
              getFavorites();
            }
          });
      }
    },
    [favIds, favorites, getFavorites, userId],
  );

  useEffect(() => {
    if (like) {
      getFavorites();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Spinner />
      </Box>
    );
  }

  if (!breeds.length) return <NotFound />;

  return (
    <Grid
      autoRows="140px"
      templateColumns="repeat(3, 1fr)"
      gap={5}
      height="100%"
    >
      {breeds.map((breed, index) => (
        <GridItem
          position="relative"
          colSpan={doubleCol.includes(index) ? 2 : 1}
          rowSpan={doubleRow.includes(index) ? 2 : 1}
          bgColor="papayawhip"
          borderRadius={20}
          role="group"
          key={breed.image.id}
        >
          <Image
            src={breed.image.url}
            alt={breed.name}
            width="100%"
            height="100%"
            objectFit="cover"
            objectPosition="center"
            borderRadius={20}
          />
          <LinkBox
            position="absolute"
            top="0"
            left="0"
            display="none"
            justifyContent="center"
            alignItems={info ? 'end' : 'center'}
            width="100%"
            height="100%"
            padding={5}
            bgGradient="linear-gradient(rgba(255,134,142,0.6) 0%, rgba(255,134,142,0.6) 100%)"
            borderRadius={20}
            transition="all 0.3s"
            role="group"
            _groupHover={{ display: 'flex' }}
          >
            {info && (
              <NextLink href={`/breeds/${breed.id}`} passHref>
                <LinkOverlay width="100%">
                  <Badge variant="link">{breed.name}</Badge>
                </LinkOverlay>
              </NextLink>
            )}
            {like && (
              <IconButton
                aria-label="Favorites"
                icon={
                  favIds.includes(breed.image.id) ? (
                    <FavFillIcon />
                  ) : (
                    <FavIcon />
                  )
                }
                bgColor={colorMode === 'light' ? 'white' : '#282828'}
                _hover={{
                  bgColor: `${
                    colorMode === 'light' ? 'var(--color-bg-red)' : '#282828'
                  }`,
                }}
                onClick={() => handleFavorite(breed.image.id)}
              />
            )}
          </LinkBox>
        </GridItem>
      ))}
    </Grid>
  );
};
