import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

import useSpotify from '@/hooks/useSpotify';
import Tooltip from '../ui/Tooltip';

const Spotify: FC = () => {
   const [loading, spotify, spotifyError] = useSpotify();

   return (
      <div className="flex items-center gap-x-3 sm:gap-x-5 font-karla">
         <AnimatePresence mode="wait">
            {spotifyError ? (
               <motion.span
                  key="error"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ ease: 'easeInOut', duration: 0.3 }}
                  className="text-sm text-right text-red-300 will-change"
               >
                  Error loading spotify
               </motion.span>
            ) : (
               !loading && (
                  <motion.span
                     key={
                        spotify
                           ? `${spotify.name}-${spotify.artist['#text']}`
                           : 'not'
                     }
                     initial={{ opacity: 0, y: 5 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -5 }}
                     transition={{ ease: 'easeInOut', duration: 0.3 }}
                     className="text-sm text-right text-green-300 will-change"
                  >
                     {spotify ? (
                        <span className="inline-flex flex-col gap-x-2">
                           <span
                              title={spotify.name}
                              className="inline-block text-xs max-w-[8rem] sm:max-w-[10rem] truncate"
                           >
                              {spotify.name}
                           </span>
                           <span className="inline-block font-medium">
                              {spotify.artist['#text']}
                           </span>
                        </span>
                     ) : (
                        'Not listening to anything'
                     )}
                  </motion.span>
               )
            )}
         </AnimatePresence>
         <AnimatePresence mode="wait">
            {spotifyError || !spotify || loading ? (
               <span className={clsx(loading && 'animate-pulse')}>
                  <i className="text-xl text-green-500 fa-brands fa-spotify"></i>
               </span>
            ) : (
               <Tooltip
                  key={spotify.image[0]['#text']}
                  hideOnClick={false}
                  placement="bottom"
                  text="Now playing"
               >
                  <motion.img
                     key={spotify.image[0]['#text']}
                     initial={{ opacity: 0, scale: 0.75 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.75 }}
                     transition={{ ease: 'easeInOut', duration: 0.3 }}
                     src={spotify.image[0]['#text']}
                     className="object-cover w-8 h-8 rounded-lg shadow will-change"
                  />
               </Tooltip>
            )}
         </AnimatePresence>
      </div>
   );
};

export default Spotify;
