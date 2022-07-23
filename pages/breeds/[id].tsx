import Head from 'next/head';
import React from 'react';
import { Controls, GridPhotos, Layout, Pagination } from '../../components';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Breeds: NextPage = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Breed – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls breedId={query.id} />
      </Layout>
    </>
  );
};

export default Breeds;
