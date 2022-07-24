import api from '../../config';
import Head from 'next/head';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Breed } from '../../models';
import { Controls, GridPhotos, Layout } from '../../components';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Search: NextPage = () => {
  const { query } = useRouter();

  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [isLoading, setLoading] = useState(false);

  const searchValue = typeof query.id === 'string' ? query.id : query.id?.[0];

  const getBreedsAll = useCallback(() => {
    setLoading(true);

    api.get<Breed[]>('/breeds').then((res) => {
      setBreeds(res.data.filter((breed) => breed.image?.url));
      setLoading(false);
    });
  }, []);

  const filteredBreeds = useMemo(
    () =>
      breeds.filter((breed) =>
        breed.name?.toLowerCase().includes(searchValue?.toLowerCase() || ''),
      ),
    [breeds, searchValue],
  );

  useEffect(() => {
    getBreedsAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Likes – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls />
        <GridPhotos breeds={filteredBreeds} isLoading={isLoading} info />
      </Layout>
    </>
  );
};

export default Search;
