import api from '../config';
import Head from 'next/head';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Controls, GridPhotos, Layout } from '../components';
import { user } from '../utils';
import { Votes } from '../models';
import type { NextPage } from 'next';

const Dislikes: NextPage = () => {
  const [dislikes, setDislikes] = useState<Votes[]>([]);
  const [isLoading, setLoading] = useState(false);

  const userId = useMemo(() => user(), []);

  const getDislike = useCallback(() => {
    setLoading(true);
    api
      .get<Votes[]>('/votes', {
        params: { sub_id: userId },
      })
      .then((res) => {
        setDislikes(res.data.filter((breed) => breed.value === 0));
      })
      .finally(() => setLoading(false));
  }, [userId]);

  useEffect(() => {
    getDislike();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>Dislikes – Funny Pets Paw</title>
      </Head>
      <Layout>
        <Controls />
        <GridPhotos breeds={dislikes} isLoading={isLoading} />
      </Layout>
    </>
  );
};

export default Dislikes;
