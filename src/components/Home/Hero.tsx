import Links from './Links';

const Hero = () => {
   return (
      <div id="hero" className="grid w-full grid-cols-1 gap-y-6 sm:grid-cols-2">
         <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
            <h1 className="text-6xl font-bold tracking-tighter font-karla">
               Vignesh
            </h1>
            <h2 className="text-3xl font-light tracking-tighter font-karla">
               Wadhwani
            </h2>
            <Links />
         </div>
         <div className="flex flex-col items-center justify-end sm:items-start">
            <h3 className="text-lg font-medium leading-8 text-center sm:text-left text-trueGray-400">
               I'm a 19-year-old{' '}
               <span className="px-1.5 rounded text-trueGray-300 bg-base-500/50">
                  full-stack engineer
               </span>{' '}
               in love with architecting and building{' '}
               <span className="px-1.5 rounded bg-base-500/50">
                  scalable applications
               </span>
               ,{' '}
               <span className="px-1.5 rounded bg-base-500/50">
                  beautiful interfaces
               </span>{' '}
               and learning anything tech.
            </h3>
            <div className="mt-10">
               <button className="py-2.5 flex items-center group tracking-tight text-sm px-4 font-semibold rounded-xl bg-base-650 border-2 transition duration-150 ease-linear hover:border-transparent hover:ring-2 hover:ring-base-650 border-base-500">
                  Contact me
                  <svg
                     width="10"
                     height="10"
                     viewBox="0 0 10 10"
                     aria-hidden="true"
                     className="relative ml-2 -mr-1 stroke-2 stroke-white fill-transparent"
                  >
                     <g fill-rule="evenodd">
                        <path
                           className="transition duration-150 ease-in-out opacity-0 group-hover:opacity-100"
                           d="M0 5h8"
                        ></path>
                        <path
                           className="group-hover:translate-x-[4px] transition duration-150 ease-in-out"
                           d="M1 1l4 4-4 4"
                        ></path>
                     </g>
                  </svg>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Hero;
