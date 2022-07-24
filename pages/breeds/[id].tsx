import api from '../../config';
import Head from 'next/head';
import React from 'react';
import { Controls, Layout } from '../../components';
import { Image as Type } from '../../models';
import { useRouter } from 'next/router';
import type { GetServerSideProps, NextPage } from 'next';
import {
  Box,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { data } = await api.get<Type[]>('/images/search', {
    params: { breed_ids: params?.id, size: 'full' },
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { breed: data },
  };
};

interface BreedProps {
  breed: Type[];
}

const Breed: NextPage<BreedProps> = ({ breed }) => {
  const { query } = useRouter();
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{breed[0].breeds[0].name} – Breed – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls breedId={query.id} />
        <VStack spacing={2}>
          <Img
            src={breed[0].url}
            alt={breed[0].breeds[0].name}
            width="100%"
            height="360px"
            objectFit="cover"
            objectPosition="center"
            borderRadius={20}
          />
          <Box width="100%" textAlign="center">
            <Heading
              display="inline-block"
              px={12}
              fontWeight={500}
              bgColor={colorMode === 'light' ? 'white' : 'transparent'}
              transform="translateY(50%)"
            >
              {breed[0].breeds[0].name}
            </Heading>
            <Box
              padding={10}
              border={`2px solid ${
                colorMode === 'light'
                  ? 'var(--color-bg-red)'
                  : 'var(--color-black-red)'
              }`}
              borderRadius={20}
            >
              <Heading
                as="h4"
                size="md"
                mb={6}
                fontWeight={500}
                color="var(--color-bg-text)"
              >
                {breed[0].breeds[0].description}
              </Heading>
              <SimpleGrid columns={2} spacing={10} textAlign="left">
                <Box>
                  <Text as="span" fontWeight={500}>
                    Temperament:
                  </Text>
                  <Text color="var(--color-bg-text)">
                    {breed[0].breeds[0].temperament}
                  </Text>
                </Box>
                <Stack spacing={2}>
                  <Box>
                    <Text as="span" fontWeight={500}>
                      Origin:{' '}
                    </Text>
                    <Text as="span" color="var(--color-bg-text)">
                      {breed[0].breeds[0].origin}
                    </Text>
                  </Box>
                  <Box>
                    <Text as="span" fontWeight={500}>
                      Weight:{' '}
                    </Text>
                    <Text as="span" color="var(--color-bg-text)">
                      {breed[0].breeds[0].weight.metric} kgs
                    </Text>
                  </Box>
                  <Box>
                    <Text as="span" fontWeight={500}>
                      Life span:{' '}
                    </Text>
                    <Text as="span" color="var(--color-bg-text)">
                      {breed[0].breeds[0].life_span} years
                    </Text>
                  </Box>
                </Stack>
              </SimpleGrid>
            </Box>
          </Box>
        </VStack>
      </Layout>
    </>
  );
};

export default Breed;
