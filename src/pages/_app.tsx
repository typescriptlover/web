import type { AppProps } from 'next/app';

import '@/styles/inter.css';
import '@/styles/tailwind.css';

import Meta from '@/components/Meta';
import FontAwesome from '@/components/FontAwesome';
import Wrapper from '@/layouts/Wrapper';
import Box from '@/layouts/Box';

const App = ({ Component, pageProps }: AppProps) => {
   return (
      <Box>
         <Meta />
         <FontAwesome />

         <Wrapper>
            <Component {...pageProps} />
         </Wrapper>
      </Box>
   );
};

export default App;
