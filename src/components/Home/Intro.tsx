import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import tinykeys from 'tinykeys';

import * as state from '@/lib/state';
import Animations from '../ui/Animations';

const Intro = () => {
   const [intro, setIntro] = useAtom(state.intro);
   const [im, setIm] = useState<boolean>(true);

   useEffect(() => {
      const unsubscribe = tinykeys(window, {
         Control: () => {
            setIm(false);
            setTimeout(() => {
               setIntro(false);
            }, 200);
         },
      });
      return () => {
         unsubscribe();
      };
   }, []);

   useEffect(() => {
      const timeout = setTimeout(() => {
         if (im) setIm(false);
         setTimeout(() => {
            if (intro) setIntro(false);
         }, 1000);
      }, 1300);

      return () => clearTimeout(timeout);
   }, [im, intro]);

   return (
      <div
         key="intro"
         className="flex flex-col items-center justify-center flex-grow"
      >
         <div className="flex flex-col items-center gap-y-6">
            <Animations.FadeY
               y={15}
               duration={0.4}
               className="inline-flex items-center justify-center w-12 h-12 text-2xl border shadow rounded-xl will-change border-base-800 bg-base-900"
            >
               <span className="animate-wave will-change">👋</span>
            </Animations.FadeY>
            <Animations.FadeY
               y={15}
               duration={0.4}
               delay={0.3}
               noExit={true}
               className="text-3xl font-semibold tracking-tight whitespace-pre will-change"
            >
               <AnimateSharedLayout>
                  <AnimatePresence>
                     {im && (
                        <Animations.FadeX x={-25} duration={0.4}>
                           Hi, I'm{' '}
                        </Animations.FadeX>
                     )}
                  </AnimatePresence>
                  <Animations.Layout layoutId="name" layout="position">
                     Vignesh.
                  </Animations.Layout>
               </AnimateSharedLayout>
            </Animations.FadeY>
            <div className="mt-1 text-xs font-medium tracking-tight uppercase text-zinc-500 font-karla">
               press{' '}
               <span className="text-zinc-400 mx-1 py-0.5 px-1 bg-base-800 rounded">
                  ctrl
               </span>{' '}
               to skip intro
            </div>
         </div>
      </div>
   );
};

export default Intro;
