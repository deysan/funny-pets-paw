import Head from 'next/head';
import Layout from '../components/Layout';
import React from 'react';
import { Text } from '@chakra-ui/react';

const Voting = () => {
  return (
    <>
      <Head>
        <title>Voting – Like Pets Paw</title>
      </Head>
      <Layout>
        <Text>Voting</Text>
      </Layout>
    </>
  );
};

export default Voting;
