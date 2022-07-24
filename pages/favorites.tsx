import api from '../config';
import Head from 'next/head';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Controls, GridPhotos, Layout } from '../components';
import { Votes } from '../models';
import { user } from '../utils';
import type { NextPage } from 'next';

const Favorites: NextPage = () => {
  const [favorites, setFavorites] = useState<Votes[]>([]);
  const [isLoading, setLoading] = useState(false);

  const userId = useMemo(() => user(), []);

  const getFavorites = useCallback(() => {
    setLoading(true);
    api
      .get<Votes[]>('/favourites', {
        params: { sub_id: userId },
      })
      .then((res) => {
        setFavorites(res.data);
        setLoading(false);
      });
  }, [userId]);

  useEffect(() => {
    getFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Favorites – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls />
        <GridPhotos breeds={favorites} isLoading={isLoading} like />
      </Layout>
    </>
  );
};

export default Favorites;
