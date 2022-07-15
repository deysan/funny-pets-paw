import Head from 'next/head';
import Layout from '../components/Layout';
import { Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Like Pets Paw</title>
        <meta name="description" content="Pets Paw App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box h="100%" bg="var(--color-bg-red)">
          <Text>Hello, World!</Text>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
