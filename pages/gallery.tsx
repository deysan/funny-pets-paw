import Head from 'next/head';
import React from 'react';
import { Layout } from '../components';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gallery – Like Pets Paw</title>
      </Head>
      <Layout>
        <Text>Gallery</Text>
      </Layout>
    </>
  );
};

export default Gallery;
