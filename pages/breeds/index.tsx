import api from '../../config';
import Head from 'next/head';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Breed, Image } from '../../models';
import { Controls, GridPhotos, Layout, Pagination } from '../../components';
import { paginate, sort } from '../../utils';
import type { NextPage } from 'next';

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
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [images, setImages] = useState<Breed[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [breedIds, setBreedIds] = useState('all');
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState('random');

  const pageCountBreeds = useMemo(
    () => Math.ceil(breeds.length / limit),
    [breeds.length, limit],
  );

  const pageCountImages = useMemo(
    () => Math.ceil(images.length / limit),
    [images.length, limit],
  );

  const sortedBreeds = useMemo(() => sort(breeds, order), [breeds, order]);
  const sortedImages = useMemo(() => sort(images, order), [images, order]);

  const filteredBreeds = useMemo(
    () => paginate(sortedBreeds, currentPage, limit),
    [currentPage, limit, sortedBreeds],
  );

  const filteredImages = useMemo(
    () => paginate(sortedImages, currentPage, limit),
    [currentPage, limit, sortedImages],
  );

  const getImagesAll = useCallback(() => {
    setLoading(true);

    api.get<Breed[]>('/breeds').then((res) => {
      setBreeds(res.data.filter((breed) => breed.image?.url));
      setLoading(false);
    });
  }, []);

  const getImagesByBreed = useCallback(() => {
    setLoading(true);

    api
      .get<Image[]>('/images/search', {
        params: { breed_ids: breedIds, limit: 99, page: 0 },
      })
      .then((res) => {
        setImages(
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
        setLoading(false);
      });
  }, [breedIds]);

  useEffect(() => {
    if (breedIds === 'all') {
      getImagesAll();
    } else {
      getImagesByBreed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breedIds]);

  useEffect(() => {
    setCurrentPage(0);
  }, [breedIds, limit, order]);

  return (
    <>
      <Head>
        <title>Breeds – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls
          breeds={breeds}
          breedIds={breedIds}
          setBreedIds={setBreedIds}
          limit={limit}
          setLimit={setLimit}
          order={order}
          setOrder={setOrder}
          setCurrentPage={setCurrentPage}
          sort
        />
        <GridPhotos
          breeds={(breedIds === 'all' && filteredBreeds) || filteredImages}
          isLoading={isLoading}
          info
        />
        {(breedIds === 'all' && breeds.length > limit) ||
        images.length > limit ? (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageCount={
              (breedIds === 'all' && pageCountBreeds) || pageCountImages
            }
            limit={limit}
            isLoading={isLoading}
          />
        ) : null}
      </Layout>
    </>
  );
};

export default Breeds;
