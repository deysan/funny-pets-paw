import Head from 'next/head';
import React from 'react';
import { Controls, Filters, Layout } from '../components';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gallery – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls upload />
        <Filters />
      </Layout>
    </>
  );
};

export default Gallery;
