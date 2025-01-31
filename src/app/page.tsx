import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';
import Hero from '@/components/home/hero/page';
import Services from '@/components/home/services/page';
import Features from '@/components/home/features/page';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>ERYX | Design Creates Culture</title>
        <meta name="description" content="We are a design-driven agency creating meaningful digital experiences." />
      </Head>

      <main className="min-h-screen">
        <Hero />
        <Services />
        <Features />
      </main>
    </Layout>
  );
};

export default Home;