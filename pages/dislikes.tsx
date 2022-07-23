import Head from 'next/head';
import React from 'react';
import { Layout } from '../components';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Dislikes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dislikes – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Text>Dislikes</Text>
      </Layout>
    </>
  );
};

export default Dislikes;
