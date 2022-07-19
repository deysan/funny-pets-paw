import Head from 'next/head';
import Layout from '../components/Layout';
import React from 'react';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Dislikes: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dislikes – Like Pets Paw</title>
      </Head>
      <Layout>
        <Text>Dislikes</Text>
      </Layout>
    </>
  );
};

export default Dislikes;
