import type { AppProps } from 'next/app';

import '@/styles/fonts/inter.css';
import '@/styles/fonts/karla.css';
import '@/styles/tailwind.css';
import '@/styles/global.css';

import Meta from '@/components/Meta';
import FontAwesome from '@/components/FontAwesome';
import Wrapper from '@/layouts/Wrapper';
import Box from '@/layouts/Box';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import Animations from '@/components/ui/Animations';
import { useRouter } from 'next/router';

import { usePreserveScroll } from '@/hooks/usePreserveScroll';
import Spotify from '@/components/Spotify';
import Toast from '@/components/Toast';

const App = ({ Component, pageProps }: AppProps) => {
   const router = useRouter();

   usePreserveScroll();

   return (
      <Box>
         <Meta />
         <FontAwesome />
         <Spotify />
         <Toast />
         <AnimatePresence mode="wait" initial={false}>
            <Animations.Scale
               key={router.route}
               scale={0.75}
               duration={0.3}
               className="flex flex-col w-full"
            >
               <Wrapper>
                  <AnimatePresence>
                     <Component {...pageProps} />
                  </AnimatePresence>
               </Wrapper>
            </Animations.Scale>
         </AnimatePresence>
      </Box>
   );
};

export default App;
