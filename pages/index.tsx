import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import type { NextPage } from 'next';
import { main } from '../public/img';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Like Pets Paw</title>
      </Head>
      <Layout>
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100%"
          bg="var(--color-bg-red)"
        >
          <Box position="absolute">
            <Image src={main} alt="girl-and-pet" placeholder="blur" />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
