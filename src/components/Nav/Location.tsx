import { FC } from 'react';

import Tooltip from '@/ui/Tooltip';

const Location: FC = () => {
   return (
      <div className="flex items-center">
         <Tooltip text="Open Map" placement="bottom">
            <button className="text-xl font-bold transition duration-100 ease-linear border-2 rounded-full hover:ring-2 hover:ring-base-900 h-11 w-11 bg-base-900 border-base-750 hover:border-transparent">
               <i className="fa-duotone fa-street-view" />
            </button>
         </Tooltip>
         <div className="ml-3 sm:ml-5">
            <div className="text-xs font-semibold text-trueGray-400">
               Willemstad,
            </div>
            <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-white to-yellow-500">
               Curaçao
            </div>
         </div>
      </div>
   );
};

export default Location;
