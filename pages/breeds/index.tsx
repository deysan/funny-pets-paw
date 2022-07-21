import Head from 'next/head';
import React from 'react';
import { Controls, GridPhotos, Layout, Pagination } from '../../components';
import type { NextPage } from 'next';

const Breeds: NextPage = () => {
  return (
    <>
      <Head>
        <title>Breeds – Like Pets Paw</title>
      </Head>
      <Layout>
        <Controls sort />
        <GridPhotos />
        <Pagination />
      </Layout>
    </>
  );
};

export default Breeds;
