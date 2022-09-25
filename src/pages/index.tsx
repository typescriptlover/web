import type { NextPage } from 'next';

import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import * as state from '@/lib/state';
import Intro from '@/components/Home/Intro';
import Hero from '@/components/Home/Hero';
import Contact from '@/components/Home/Contact';
import Sections from '@/components/Home/Sections';

// TODO: include spotify now playing somewhere on the page
// TODO: make intro only true when index is being viewed as the first page
const Home: NextPage = () => {
   const [intro] = useAtom(state.intro);

   return (
      <AnimatePresence mode="wait">
         {intro ? (
            <Intro />
         ) : (
            <div key="page">
               <Hero />
               <Contact />
               <Sections />
            </div>
         )}
      </AnimatePresence>
   );
};

export default Home;
