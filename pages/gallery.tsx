import { Breed, Image, Params } from '../models';
import {
  Controls,
  Filters,
  GridPhotos,
  Layout,
  Pagination,
  UploadModal,
} from '../components';
import React, { useCallback, useEffect, useState } from 'react';

import Head from 'next/head';
import type { NextPage } from 'next';
import api from '../config';
import { useDisclosure } from '@chakra-ui/react';

const Gallery: NextPage = () => {
  const {
    isOpen: isOpenUploadModal,
    onOpen: onOpenUploadModal,
    onClose: onCloseUploadModal,
  } = useDisclosure();

  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [paginationCount, setPaginationCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [params, setParams] = useState<Params>({
    breed_ids: '',
    limit: 5,
    order: 'random',
    mime_types: '',
  });

  const getImages = useCallback(() => {
    setLoading(true);

    api
      .get<Image[]>('/images/search', {
        params: { ...params, page: currentPage },
      })
      .then((res) => {
        setBreeds(
          res.data.map(
            (breed): Breed => ({
              id: breed.breeds?.[0]?.id || '',
              name: breed.breeds?.[0]?.name || '',
              image: {
                id: breed.id,
                url: breed.url,
              },
            }),
          ),
        );
        setPaginationCount(Number(res.headers['pagination-count']));
      })
      .finally(() => setLoading(false));
  }, [currentPage, params]);

  useEffect(() => {
    getImages();
  }, [currentPage, getImages]);

  return (
    <>
      <Head>
        <title>Gallery – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls upload onOpenUploadModal={onOpenUploadModal} />
        <Filters setParams={setParams} setCurrentPage={setCurrentPage} />
        <GridPhotos breeds={breeds} isLoading={isLoading} like />
        {paginationCount > params.limit ? (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageCount={paginationCount / params.limit}
            isLoading={isLoading}
          />
        ) : null}
      </Layout>
      <UploadModal isOpen={isOpenUploadModal} onClose={onCloseUploadModal} />
    </>
  );
};

export default Gallery;
