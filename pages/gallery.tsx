import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Controls,
  Filters,
  GridPhotos,
  Layout,
  Pagination,
} from '../components';
import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Breeds } from './breeds';
import api from '../config';

export type Params = {
  breed_ids: string;
  limit: string;
  page: number;
  order: string;
  mime_types: string;
};

const Gallery: NextPage = () => {
  const [breeds, setBreeds] = useState<Breeds[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [paginationCount, setPaginationCount] = useState('');
  const [params, setParams] = useState<Params>({
    breed_ids: '',
    limit: '5',
    page: 0,
    order: 'random',
    mime_types: '',
  });

  const getImages = useCallback(() => {
    setLoading(true);

    api.get('/images/search', { params }).then((res) => {
      setBreeds(res.data);
      setPaginationCount(res.headers['pagination-count']);
      setLoading(false);
    });
  }, [params]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <>
      <Head>
        <title>Gallery – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls upload />
        <Filters />
        <GridPhotos breeds={breeds} isLoading={isLoading} like />
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

export default Gallery;
