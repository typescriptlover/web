import type { NextPage } from 'next';

import Box from '@/layouts/Box';
import Nav from '@/layouts/Nav';
import Tooltip from '@/components/ui/Tooltip';

const Index: NextPage = () => {
   return (
      <Box>
         <Nav />
         <div className="max-w-4xl mx-auto mt-24">
            <div className="grid w-full grid-cols-1 gap-y-6 sm:grid-cols-2">
               <div>
                  <h1 className="text-6xl font-bold tracking-tighter font-karla">
                     Vignesh
                  </h1>
                  <h2 className="text-3xl font-light tracking-tighter font-karla">
                     Wadhwani
                  </h2>
                  <div className="flex items-center mt-12 gap-x-6">
                     <Tooltip text="GitHub" placement="bottom">
                        <a
                           className="inline-block text-xl transition duration-200 ease-linear will-change hover:rotate-6 hover:scale-105 hover:text-white text-trueGray-200"
                           target="_blank"
                           href="https://github.com"
                        >
                           <i className="fa-brands fa-github"></i>
                        </a>
                     </Tooltip>
                     <Tooltip text="Linked In" placement="bottom">
                        <a
                           className="inline-block text-xl transition duration-200 ease-linear will-change hover:rotate-6 hover:scale-105 hover:text-white text-trueGray-200"
                           target="_blank"
                           href="https://linkedin.com"
                        >
                           <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                     </Tooltip>
                  </div>
               </div>
               <div className="flex flex-col justify-end">
                  <h3 className="text-lg font-medium leading-7 text-trueGray-400">
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
            <hr className="mb-6 border-t mt-14 border-base-800" />
            <div className="flex flex-wrap items-center gap-x-4">
               <div className="text-xs font-medium text-trueGray-400">
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
               <h1 className="text-5xl font-semibold font-karla">Projects</h1>
               <h2 className="mt-2 text-sm font-medium tracking-tight text-trueGray-400">
                  A collection of my personal or professional projects.
               </h2>
               <div className="grid grid-cols-2 gap-4 mt-10">
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
