import { AnimatePresence, motion } from 'framer-motion';

import useSpotify from '@/hooks/useSpotify';
import Tooltip from '@/components/ui/Tooltip';
import clsx from 'clsx';
import Animations from './ui/Animations';

const Spotify = () => {
   const [loading, spotify, spotifyError] = useSpotify();

   return (
      <div className="fixed top-8 right-8 z-[100]">
         <div className="flex items-center justify-end text-right gap-x-5 font-karla">
            <AnimatePresence mode="wait">
               {spotifyError ? (
                  <span className="text-sm text-red-300">
                     Error loading spotify
                  </span>
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
                        transition={{
                           ease: 'easeInOut',
                           duration: 0.3,
                        }}
                        className="text-sm text-green-300 will-change"
                     >
                        {spotify ? (
                           <span className="inline-flex flex-col">
                              <span className="inline-block text-xs max-w-[12rem] truncate">
                                 {spotify.name}
                              </span>
                              <span className="font-medium">
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
                  <Animations.Scale
                     key={spotify.image[0]['#text']}
                     scale={0.75}
                     duration={0.3}
                  >
                     <Tooltip text="Now Playing">
                        <img
                           src={spotify.image[0]['#text']}
                           className="object-cover w-8 h-8 rounded-lg shadow will-change"
                        />
                     </Tooltip>
                  </Animations.Scale>
               )}
            </AnimatePresence>
         </div>
      </div>
   );
};

export default Spotify;
