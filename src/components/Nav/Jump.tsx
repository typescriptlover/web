import { FC, useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';

import * as state from '@/lib/state';
import clsx from 'clsx';
import Tooltip from '../ui/Tooltip';
import { Section } from '@/types/interfaces';

const Jump: FC = () => {
   const [sections] = useAtom(state.sections);

   const [jumpEl, setJumpEl] = useState<HTMLElement | false>(false);
   const [jumpIntersect, setJumpIntersect] = useState<boolean>(true);
   const [heroEl, setHeroEl] = useState<HTMLElement | false>(false);
   const [heroIntersect, setHeroIntersect] = useState<boolean>(true);

   const showJump = useMemo(
      () => !jumpIntersect && !heroIntersect,
      [jumpIntersect, heroIntersect]
   );

   useEffect(() => {
      const j = document.getElementById('jump');
      const h = document.getElementById('hero');

      if (j) setJumpEl(j);
      if (h) setHeroEl(h);
   }, []);

   useEffect(() => {
      if (jumpEl && heroEl) {
         const jumpObs = new IntersectionObserver(([entry]) =>
            setJumpIntersect(entry.isIntersecting)
         );
         const heroObs = new IntersectionObserver(([entry]) =>
            setHeroIntersect(entry.isIntersecting)
         );

         jumpObs.observe(jumpEl);
         heroObs.observe(heroEl);

         return () => {
            jumpObs.disconnect();
            heroObs.disconnect();
         };
      }
   }, [jumpEl, heroEl]);

   function jumpTo(ref: Section['ref']) {
      if (ref) {
         ref.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
         });
      }
   }

   return (
      <AnimatePresence>
         {showJump && (
            <motion.div
               initial={{ opacity: 0, y: -25, scale: 0.75 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: -25, scale: 0.75 }}
               transition={{ ease: 'easeInOut', duration: 0.2 }}
               className="fixed inset-x-0 px-5 flex items-center justify-center top-5 z-[1000]"
            >
               <Tooltip text="Jump to" placement="bottom" hideOnClick={false}>
                  <div className="flex items-center w-full max-w-xs space-x-[-1px] shadow-2xl">
                     {sections.map((section, sectionIndex) => (
                        <button
                           onClick={() => jumpTo(section.ref)}
                           className={clsx(
                              'w-full bg-base-700/90 transition duration-150 ease-linear hover:bg-base-600 border border-base-600 text-white text-sm py-2.5 font-semibold',
                              sectionIndex === 0 && 'rounded-l-xl',
                              sectionIndex === sections.length - 1 &&
                                 'rounded-r-xl'
                           )}
                        >
                           <span className="mr-3 -ml-1 text-trueGray-400">
                              <i
                                 className={`fa-duotone fa-${section.icon}`}
                              ></i>
                           </span>
                           {section.name}
                        </button>
                     ))}
                  </div>
               </Tooltip>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default Jump;
