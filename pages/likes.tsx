import Head from 'next/head';
import React from 'react';
import { Layout } from '../components';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Likes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Likes – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Text>Likes</Text>
      </Layout>
    </>
  );
};

export default Likes;
