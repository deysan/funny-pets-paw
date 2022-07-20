import Head from 'next/head';
import React from 'react';
import { Controls, Layout } from '../../components';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Breeds: NextPage = () => {
  return (
    <>
      <Head>
        <title>Breeds – Like Pets Paw</title>
      </Head>
      <Layout>
        <Controls sort />
      </Layout>
    </>
  );
};

export default Breeds;
