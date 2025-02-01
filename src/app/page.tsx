import {Hero} from '@/components/home/hero/page';
import Services from '@/components/home/services/page';
import Features from '@/components/home/features/page';
import Navbar from '@/components/nav-bar/page';
import Head from 'next/head';
import { m as motion, LazyMotion, domAnimation } from 'framer-motion';

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen">
        <Head>
          <title>ERYX | Design Creates Culture</title>
          <meta name="description" content="We are a design-driven agency creating meaningful digital experiences." />
        </Head>
        <main>
          <Navbar />
          <Hero />
          <Services />
          <Features />
        </main>
      </div>
    </LazyMotion>
  );
}