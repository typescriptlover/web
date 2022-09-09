import type { NextPage } from 'next';

import Box from '@/layouts/Box';
import Nav from '@/layouts/Nav';
import Tooltip from '@/components/ui/Tooltip';

const Index: NextPage = () => {
   return (
      <Box>
         <Nav />
         <div className="mt-24 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 w-full">
               <div>
                  <h1 className="text-6xl font-bold tracking-tighter">
                     Vignesh
                  </h1>
                  <h2 className="text-3xl font-light tracking-tighter">
                     Wadhwani
                  </h2>
                  <div className="flex items-center gap-x-6 mt-12">
                     <Tooltip text="GitHub" placement="bottom">
                        <a
                           className="text-xl inline-block transition duration-200 ease-linear will-change hover:rotate-6 hover:scale-105 hover:text-white text-trueGray-200"
                           target="_blank"
                           href="https://github.com"
                        >
                           <i className="fa-brands fa-github"></i>
                        </a>
                     </Tooltip>
                     <Tooltip text="Linked In" placement="bottom">
                        <a
                           className="text-xl inline-block transition duration-200 ease-linear will-change hover:rotate-6 hover:scale-105 hover:text-white text-trueGray-200"
                           target="_blank"
                           href="https://linkedin.com"
                        >
                           <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                     </Tooltip>
                  </div>
               </div>
               <div className="flex justify-end flex-col">
                  <h3 className="text-lg text-trueGray-400 font-medium leading-7">
                     I'm a 19-year-old full-stack engineer in love with
                     architecting and building scalable applications, beautiful
                     interfaces and learning anything tech.
                  </h3>
                  <div className="mt-10">
                     <button className="py-2.5 tracking-tight text-sm px-4 font-semibold rounded-xl bg-base-650 border-2 transition duration-200 ease-linear hover:border-transparent hover:ring-2 hover:ring-base-650 border-base-500">
                        Contact me
                     </button>
                  </div>
               </div>
            </div>
            <hr className="mt-14 mb-6 border-t border-base-800" />
            <div className="flex items-center flex-wrap gap-x-4">
               <div className="text-xs text-trueGray-400 font-medium">
                  Jump To
               </div>
               <div className="flex items-center gap-x-2">
                  <button className="text-sm font-semibold py-1.5 px-3 bg-base-700 rounded-lg">
                     <span className="mr-2 text-xs rotate-[8deg] inline-block text-trueGray-500">
                        <i className="fa-duotone fa-file-lines"></i>
                     </span>
                     About
                  </button>
                  <button className="text-sm font-semibold py-1.5 px-3 bg-base-500 rounded-lg">
                     <span className="mr-2 text-xs rotate-[8deg] inline-block text-trueGray-400">
                        <i className="fa-duotone fa-grid-2"></i>
                     </span>
                     Projects
                  </button>
                  <button className="text-sm font-semibold py-1.5 px-3 bg-base-500 rounded-lg">
                     <span className="mr-2 text-xs rotate-[8deg] inline-block text-trueGray-400">
                        <i className="fa-duotone fa-code"></i>
                     </span>
                     Skills
                  </button>
               </div>
            </div>
            <div className="mt-24">
               <h1 className="text-4xl font-semibold tracking-wide">
                  Projects
               </h1>
               <h2 className="tracking-tight text-sm text-trueGray-400 font-medium mt-2">
                  A collection of my personal or professional projects.
               </h2>
               <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="w-full p-4 rounded-2xl bg-base-700">
                     asdsas
                  </div>
                  <div className="w-full p-4 rounded-2xl bg-base-700">
                     asdsas
                  </div>
                  <div className="w-full p-4 rounded-2xl bg-base-700">
                     asdsas
                  </div>
                  <div className="w-full p-4 rounded-2xl bg-base-700">
                     asdsas
                  </div>
               </div>
            </div>
         </div>
      </Box>
   );
};

export default Index;
