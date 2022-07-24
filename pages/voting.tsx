import api from '../config';
import Head from 'next/head';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Badge,
  Box,
  HStack,
  IconButton,
  Img,
  Spacer,
  Spinner,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import { Controls, Layout } from '../components';
import {
  DislikeIcon,
  FavFillIcon,
  FavIcon,
  LikeIcon,
} from '../components/icons';
import { Votes, Image } from '../models';
import { user } from '../utils';
import type { NextPage } from 'next';

const Voting: NextPage = () => {
  const { colorMode } = useColorMode();

  const [image, setImage] = useState<Image>();
  const [favorites, setFavorites] = useState<Votes[]>([]);
  const [isLoading, setLoading] = useState(false);

  const userId = useMemo(() => user(), []);

  const favIds = useMemo(
    () => favorites.map((fav) => fav.image_id),
    [favorites],
  );

  const getImage = useCallback(() => {
    setLoading(true);
    api
      .get<Image[]>('/images/search', {
        params: { limit: 1, size: 'full', sub_id: userId },
      })
      .then((res) => {
        setImage(res.data[0]);
        setLoading(false);
      });
  }, [userId]);

  const getFavorites = useCallback(() => {
    api
      .get<Votes[]>('/favourites', { params: { sub_id: userId } })
      .then((res) => {
        setFavorites(res.data);
      });
  }, [userId]);

  const handleVoting = useCallback(
    (imageId: string, vote: boolean) => {
      api
        .post('/votes', { image_id: imageId, value: vote, sub_id: userId })
        .then((res) => {
          if (res.data.message === 'SUCCESS') {
            getImage();
          }
        });
    },
    [getImage, userId],
  );

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
    getImage();
    getFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Voting – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls />
        <VStack spacing={12}>
          <Box position="relative" width="100%" textAlign="center">
            {isLoading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="360px"
              >
                <Spinner />
              </Box>
            ) : (
              <Img
                src={image?.url}
                alt={image?.id}
                width="100%"
                height="360px"
                objectFit="cover"
                objectPosition="center"
                borderRadius={20}
              />
            )}

            <HStack
              position="absolute"
              spacing={1}
              display="inline-block"
              bgColor="white"
              border={`4px solid ${
                colorMode === 'light' ? 'white' : '#282828'
              }`}
              borderLeftRadius={25}
              borderRightRadius={25}
              transform="translateX(-50%) translateY(-50%)"
              zIndex={10}
            >
              <IconButton
                aria-label="Like"
                variant="green"
                size="xl"
                borderLeftRadius={20}
                icon={<LikeIcon w={8} h={8} />}
                isDisabled={isLoading}
                onClick={() => handleVoting(image?.id || '', true)}
              />
              <IconButton
                aria-label="Favorite"
                variant="red"
                size="xl"
                icon={
                  favIds.includes(image?.id || '') ? (
                    <FavFillIcon w={8} h={8} />
                  ) : (
                    <FavIcon w={8} h={8} />
                  )
                }
                isDisabled={isLoading}
                onClick={() => handleFavorite(image?.id || '')}
              />
              <IconButton
                aria-label="Dislike"
                variant="yellow"
                size="xl"
                borderRightRadius={20}
                icon={<DislikeIcon w={8} h={8} />}
                isDisabled={isLoading}
                onClick={() => handleVoting(image?.id || '', false)}
              />
            </HStack>
          </Box>
          {/* <VStack spacing={3} width="100%">
            <HStack
              spacing={5}
              padding={5}
              width="100%"
              bgColor={
                colorMode === 'light'
                  ? 'var(--color-white)'
                  : 'var(--color-bg-black)'
              }
              borderRadius={10}
            >
              <Badge variant="time">22:22</Badge>
              <Box>
                <Text as="span" color="var(--color-bg-text)">
                  Image ID:{' '}
                </Text>
                <Text as="span" fontWeight={500}>
                  Sddsf72CJsf
                </Text>
                <Text as="span" color="var(--color-bg-text)">
                  {' '}
                  was
                </Text>
              </Box>
              <Spacer />
              <FavIcon />
            </HStack>
          </VStack> */}
        </VStack>
      </Layout>
    </>
  );
};

export default Voting;
