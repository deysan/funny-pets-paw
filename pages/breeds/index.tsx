import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Controls, GridPhotos, Layout, Pagination } from '../../components';
import type { NextPage } from 'next';
import api from '../../config';
import { Breed } from '../../models';

export type Breeds = {
  breeds: Breed[];
  id: string;
  url: string;
};

export type Params = {
  breed_ids: string;
  limit: string;
  page: number;
  order: string;
  size: string;
  has_breeds: boolean;
};

interface BreedsProps {}

const Breeds: NextPage<BreedsProps> = () => {
  const [breeds, setBreeds] = useState<Breeds[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [paginationCount, setPaginationCount] = useState('');
  const [params, setParams] = useState<Params>({
    breed_ids: '',
    limit: '5',
    page: 0,
    order: 'random',
    size: 'small',
    has_breeds: true,
  });

  useEffect(() => {
    console.log(params);
    setLoading(true);

    api.get('/images/search', { params }).then((res) => {
      setBreeds(res.data);
      setPaginationCount(res.headers['pagination-count']);
      setLoading(false);
    });
  }, [params]);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  return (
    <>
      <Head>
        <title>Breeds – Like Pets Paw</title>
      </Head>
      <Layout>
        <Controls params={params} setParams={setParams} sort />
        <GridPhotos breeds={breeds} />
        {Number(paginationCount) > Number(params.limit) ? (
          <Pagination
            params={params}
            setParams={setParams}
            paginationCount={paginationCount}
          />
        ) : null}
      </Layout>
    </>
  );
};

export default Breeds;
