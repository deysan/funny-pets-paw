import Head from 'next/head';
import Layout from '../components/Layout';
import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Like Pets Paw</title>
        <meta name="description" content="Pets Paw App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box h="100%" bg="#FBE0DC">
          <Text>Hello, World!</Text>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
