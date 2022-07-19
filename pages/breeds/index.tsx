import Head from 'next/head';
import React from 'react';
import { Layout } from '../../components';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Breeds: NextPage = () => {
  return (
    <>
      <Head>
        <title>Breeds – Like Pets Paw</title>
      </Head>
      <Layout>
        <Text>Breeds</Text>
      </Layout>
    </>
  );
};

export default Breeds;
