import api from '../config';
import NextLink from 'next/link';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Breed, Votes } from '../models';
import { FavFillIcon, FavIcon } from './icons';
import { NotFound } from './NotFound';
import { user } from '../utils';
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

interface GridPhotosProps {
  info?: boolean;
  like?: boolean;
  breeds: Breed[] | Votes[];
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

  const [favorites, setFavorites] = useState<Votes[]>([]);

  const userId = useMemo(() => user(), []);

  const favIds = useMemo(
    () => favorites.map((fav) => fav.image_id),
    [favorites],
  );

  const getFavorites = useCallback(() => {
    api
      .get<Votes[]>('/favourites', {
        params: { sub_id: userId },
      })
      .then((res) => {
        setFavorites(res.data);
      });
  }, [userId]);

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
            alt={breed?.name || breed.image.id}
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
                    <FavFillIcon w={5} h={5} />
                  ) : (
                    <FavIcon w={5} h={5} />
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
