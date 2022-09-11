import { FC } from 'react';

import Spotify from '@/components/Nav/Spotify';
import Location from '@/components/Nav/Location';
import Jump from '@/components/Nav/Jump';

const Nav: FC = () => {
   return (
      <nav className="relative flex items-center justify-between w-full gap-x-3">
         <Location />
         <Spotify />
         <Jump />
      </nav>
   );
};

export default Nav;
