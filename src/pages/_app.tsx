import type { AppProps } from 'next/app';

import '@/styles/fonts/inter.css';
import '@/styles/fonts/karla.css';
import '@/styles/tailwind.css';

import Meta from '@/components/Meta';
import FontAwesome from '@/components/FontAwesome';
import Wrapper from '@/layouts/Wrapper';
import Box from '@/layouts/Box';
import Nav from '@/layouts/Nav';

const App = ({ Component, pageProps }: AppProps) => {
   return (
      <Box>
         <Meta />
         <FontAwesome />

         <Wrapper>
            <Nav />
            <Component {...pageProps} />
         </Wrapper>
      </Box>
   );
};

export default App;
