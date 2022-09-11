import { useAtom } from 'jotai';
import { FC, ReactNode, useEffect, useRef } from 'react';

import * as state from '@/lib/state';
import { Section } from '@/types/interfaces';

interface Props {
   title: string;
   description: string;
   children: ReactNode;
}
const Section: FC<Props> = ({ title, description, children }) => {
   const [sections, setSections] = useAtom(state.sections);
   const ref = useRef<HTMLDivElement>(null);

   function setSectionRef() {
      const newSections = sections.map((section): Section => {
         if (section.name.toLowerCase() === title.toLowerCase()) {
            return {
               ...section,
               ref: ref.current,
            };
         }
         return section;
      });
      setSections(newSections);
   }

   useEffect(() => {
      const exists = sections.find(
         (s) => s.name.toLowerCase() === title.toLowerCase() && !!s.ref
      );
      if (!exists && ref.current) setSectionRef();
   }, [ref, sections]);

   return (
      <div className="py-4 group" ref={ref} id={title.toLowerCase()}>
         <h1 className="text-5xl font-semibold text-center font-karla sm:text-left">
            <span className="inline-block mr-3 text-4xl transition duration-150 ease-linear group-hover:text-trueGray-500 text-trueGray-600 rotate-6">
               #
            </span>
            {title}
         </h1>
         <h2 className="mt-3 text-base font-medium text-center sm:text-left text-trueGray-400">
            {description}
         </h2>
         {children}
      </div>
   );
};

export default Section;
