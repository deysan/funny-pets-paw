import Head from 'next/head';
import Layout from '../components/Layout';
import React from 'react';
import { TopBar } from '../components/TopBar';
import type { NextPage } from 'next';

const Voting: NextPage = () => {
  return (
    <>
      <Head>
        <title>Voting – Like Pets Paw</title>
      </Head>
      <Layout>
        <TopBar />
      </Layout>
    </>
  );
};

export default Voting;
