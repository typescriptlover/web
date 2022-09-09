import { AnimatePresence, motion } from 'framer-motion';

import useSpotify from '@/hooks/useSpotify';
import Tooltip from '@/components/ui/Tooltip';
import clsx from 'clsx';

const Spotify = () => {
   const [loading, spotify, spotifyError] = useSpotify();

   return (
      <div className="flex items-center gap-x-4">
         <AnimatePresence mode="wait">
            {spotifyError ? (
               <motion.span
                  key="error"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ ease: 'easeInOut', duration: 0.3 }}
                  className="text-sm text-red-300 will-change"
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
                     className="text-sm text-green-300 will-change"
                  >
                     {spotify ? (
                        <span className="inline-flex items-center">
                           <Tooltip
                              hideOnClick={false}
                              interactive={true}
                              placement="bottom"
                              text={spotify.name}
                           >
                              <span className="inline-block text-xs max-w-[10rem] truncate">
                                 {spotify.name}
                              </span>
                           </Tooltip>
                           <span className="ml-2 font-medium">
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
                  <i className="fa-brands text-xl text-green-500 fa-spotify"></i>
               </span>
            ) : (
               <motion.img
                  key={spotify.image[0]['#text']}
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.75 }}
                  transition={{ ease: 'easeInOut', duration: 0.3 }}
                  src={spotify.image[0]['#text']}
                  className="h-8 w-8 rounded-lg shadow object-cover will-change"
               />
            )}
         </AnimatePresence>
      </div>
   );
};

export default Spotify;
