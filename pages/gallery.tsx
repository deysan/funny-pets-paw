import Head from 'next/head';
import Layout from '../components/Layout';
import React from 'react';
import { Text } from '@chakra-ui/react';

const Gallery = () => {
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
