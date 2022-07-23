import Head from 'next/head';
import React from 'react';
import { Layout } from '../components';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Favorites: NextPage = () => {
  return (
    <>
      <Head>
        <title>Favorites – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Text>Favorites</Text>
      </Layout>
    </>
  );
};

export default Favorites;
