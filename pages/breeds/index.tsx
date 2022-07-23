import api from '../../config';
import Head from 'next/head';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Breed } from '../../models';
import { Controls, GridPhotos, Layout, Pagination } from '../../components';
import type { NextPage } from 'next';

export type Breeds = {
  id: string;
  name: string;
  imgId: string;
  imgSrc: string;
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
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [breedIds, setBreedIds] = useState('');
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState('random');

  const pageCount = useMemo(
    () => Math.ceil(breeds.length / limit),
    [breeds.length, limit],
  );

  const sortedBreeds = useMemo(() => {
    if (order === 'asc') {
      return [...breeds].sort((a, b) => a.id.localeCompare(b.id));
    } else if (order === 'desc') {
      return [...breeds].sort((a, b) => b.id.localeCompare(a.id));
    } else {
      return [...breeds]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    }
  }, [breeds, order]);

  const filteredBreeds = useMemo(() => {
    const startIndex = currentPage * limit;

    return [...sortedBreeds].splice(startIndex, limit);
  }, [currentPage, limit, sortedBreeds]);

  // const getImagesByBreed = useCallback(async () => {
  //   setLoading(true);

  //   const response = await api.get('/images/search').then((res) => {
  //     setBreeds(
  //       res.data.map((breed) => {
  //         return {
  //           id: breed.id,
  //           name: breed.name,
  //         };
  //       }),
  //     );
  //     setLoading(false);
  //   });
  // }, []);

  useEffect(() => {
    setLoading(true);

    api.get('/breeds').then((res) => {
      setBreeds(
        res.data
          .map((breed) => {
            return {
              id: breed.id,
              name: breed.name,
              imgId: breed.image?.id,
              imgSrc: breed.image?.url,
            };
          })
          .filter((breed) => breed.imgSrc),
      );
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [breedIds, limit, order]);

  // useEffect(() => {
  //   setLoading(true);

  //   api.get('/breeds').then((res) => {
  //     setBreeds(
  //       res.data.map((breed) => {
  //         return {
  //           id: breed.id,
  //           name: breed.name,
  //         };
  //       }),
  //     );
  //     setLoading(false);
  //   });
  // }, []);

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
        <GridPhotos breeds={filteredBreeds} isLoading={isLoading} info />
        {breeds.length > limit ? (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageCount={pageCount}
            limit={limit}
            isLoading={isLoading}
          />
        ) : null}
      </Layout>
    </>
  );
};

export default Breeds;
