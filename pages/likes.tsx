import api from '../config';
import Head from 'next/head';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Controls, GridPhotos, Layout } from '../components';
import { user } from '../utils';
import { Votes } from '../models';
import type { NextPage } from 'next';

const Likes: NextPage = () => {
  const [likes, setLikes] = useState<Votes[]>([]);
  const [isLoading, setLoading] = useState(false);

  const userId = useMemo(() => user(), []);

  const getLikes = useCallback(() => {
    setLoading(true);
    api
      .get<Votes[]>('/votes', {
        params: { sub_id: userId },
      })
      .then((res) => {
        setLikes(res.data.filter((breed) => breed.value === 1));
        setLoading(false);
      });
  }, [userId]);

  useEffect(() => {
    getLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Likes – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls />
        <GridPhotos breeds={likes} isLoading={isLoading} />
      </Layout>
    </>
  );
};

export default Likes;
