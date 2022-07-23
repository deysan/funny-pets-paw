import api from '../../config';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Breed } from '../../models';
import { Controls, GridPhotos, Layout, Pagination } from '../../components';
import type { NextPage } from 'next';

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

  return (
    <>
      <Head>
        <title>Breeds – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls params={params} setParams={setParams} sort />
        <GridPhotos breeds={breeds} isLoading={isLoading} />
        {Number(paginationCount) > Number(params.limit) ? (
          <Pagination
            params={params}
            setParams={setParams}
            paginationCount={paginationCount}
            isLoading={isLoading}
          />
        ) : null}
      </Layout>
    </>
  );
};

export default Breeds;
