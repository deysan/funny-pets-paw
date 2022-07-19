import Head from 'next/head';
import React from 'react';
import { Layout } from '../components';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Voting: NextPage = () => {
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
