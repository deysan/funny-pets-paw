import Head from 'next/head';
import Layout from '../components/Layout';
import React from 'react';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Favorites: NextPage = () => {
  return (
    <>
      <Head>
        <title>Favorites – Like Pets Paw</title>
      </Head>
      <Layout>
        <Text>Favorites</Text>
      </Layout>
    </>
  );
};

export default Favorites;
