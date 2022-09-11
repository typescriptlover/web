import type { NextPage } from 'next';

import Container from '@/layouts/Container';
import Jump from '@/components/Home/Jump';
import Hero from '@/components/Home/Hero';
import Sections from '@/components/Home/Sections';

const Home: NextPage = () => {
   return (
      <Container>
         <Hero />
         <hr className="border-t mt-14 border-base-800" />
         <Jump />
         <Sections />
      </Container>
   );
};

export default Home;
