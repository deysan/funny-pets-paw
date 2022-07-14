import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Like Pets Paw</title>
        <meta name="description" content="Pets Paw App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World!</h1>
      </main>
    </div>
  );
};

export default Home;
