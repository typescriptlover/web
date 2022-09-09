import { FC, useEffect } from 'react';

import Tooltip from '@/components/ui/Tooltip';
import Spotify from '@/components/Home/Spotify';

const Nav: FC = () => {
   return (
      <div className="w-full flex items-center justify-between">
         <div className="flex items-center">
            <Tooltip text="Open Map" placement="bottom">
               <button className="text-xl font-bold transition duration-100 hover:ring-2 hover:ring-base-900 ease-linear h-11 w-11 rounded-full bg-base-900 border-2 border-base-750 hover:border-transparent">
                  <i className="fa-duotone fa-street-view" />
               </button>
            </Tooltip>
            <div className="ml-5">
               <div className="text-xs text-trueGray-400 font-semibold">
                  Willemstad,
               </div>
               <div className="text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-white to-yellow-500 font-bold">
                  Curaçao
               </div>
            </div>
         </div>
         <div>
            <Spotify />
         </div>
      </div>
   );
};

export default Nav;
