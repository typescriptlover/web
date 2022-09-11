import { useAtom } from 'jotai';
import { FC } from 'react';

import * as state from '@/lib/state';

const Jump: FC = () => {
   const [sections] = useAtom(state.sections);

   function jumpTo(section: string) {
      const validSection = sections.find(
         (s) => s.name.toLowerCase() === section.toLowerCase() && !!s.ref
      );

      if (validSection) {
         validSection.ref.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
         });
      }
   }

   return (
      <div
         id="jump"
         className="flex flex-col items-center gap-4 mt-6 sm:flex-row"
      >
         <div className="text-sm font-semibold text-trueGray-400 font-karla">
            Jump To
         </div>
         <div className="flex flex-col items-center w-full gap-x-2 gap-y-3 sm:w-auto sm:flex-row">
            {sections.map((section, sectionIndex) => (
               <button
                  key={sectionIndex}
                  onClick={() => jumpTo(section.name)}
                  className="text-sm font-semibold py-2.5 sm:py-1.5 w-full sm:w-auto px-3 transition duration-150 ease-linear hover:ring-2 hover:ring-base-500 bg-base-500 rounded-lg"
               >
                  <span className="mr-4 sm:mr-2 text-base sm:text-xs rotate-[8deg] inline-block text-trueGray-400">
                     <i className={`fa-duotone fa-${section.icon}`}></i>
                  </span>
                  {section.name}
               </button>
            ))}
         </div>
      </div>
   );
};

export default Jump;
