import Head from 'next/head';
import Layout from '../../components/Layout';
import React from 'react';
import { Text } from '@chakra-ui/react';

const Breeds = () => {
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
