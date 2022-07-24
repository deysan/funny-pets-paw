import api from '../config';
import Head from 'next/head';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  HStack,
  IconButton,
  Img,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import { Controls, Layout, NotFound } from '../components';
import { DislikeIcon, FavIcon, LikeIcon } from '../components/icons';
import { Image } from '../models';
import { user } from '../utils';
import type { NextPage } from 'next';

const Voting: NextPage = () => {
  const { colorMode } = useColorMode();

  const [image, setImage] = useState<Image>();

  const userId = useMemo(() => user(), []);

  const getImage = useCallback(() => {
    api
      .get<Image[]>('/images/search', {
        params: { limit: 1, size: 'full', sub_id: userId },
      })
      .then((res) => setImage(res.data[0]));
  }, [userId]);

  useEffect(() => {
    getImage();
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
            <Img
              src={image?.url}
              alt={image?.id}
              width="100%"
              height="360px"
              objectFit="cover"
              objectPosition="center"
              borderRadius={20}
            />
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
              />
              <IconButton
                aria-label="Favorite"
                variant="red"
                size="xl"
                icon={<FavIcon w={8} h={8} />}
              />
              <IconButton
                aria-label="Dislike"
                variant="yellow"
                size="xl"
                borderRightRadius={20}
                icon={<DislikeIcon w={8} h={8} />}
              />
            </HStack>
          </Box>
          <VStack spacing={3} width="100%">
            <Box
              p={5}
              width="100%"
              bgColor={
                colorMode === 'light'
                  ? 'var(--color-white)'
                  : 'var(--color-bg-black)'
              }
              borderRadius={10}
            >
              <Text color="var(--color-bg-text)">No item found</Text>
            </Box>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
};

export default Voting;
