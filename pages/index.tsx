import Head from 'next/head';
import Image from 'next/image';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { Layout } from '../components';
import { main } from '../public/images';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 992px)');

  return (
    <>
      <Head>
        <title>Funny Pets Paw</title>
      </Head>
      <Layout>
        {isDesktop && (
          <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            bgColor="var(--color-bg-red)"
          >
            <Box position="absolute">
              <Image src={main} alt="girl-and-pet" placeholder="blur" />
            </Box>
          </Box>
        )}
      </Layout>
    </>
  );
};

export default Home;
