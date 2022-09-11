import { FC } from 'react';

import Section from '@/ui/Section';

const Projects: FC = () => {
   return (
      <Section
         title="Projects"
         description="A collection of my personal or professional projects."
      >
         <div className="grid grid-cols-1 gap-5 mt-10">
            <div className="w-full p-4 rounded-2xl bg-base-700">asdsas</div>
            <div className="w-full p-4 rounded-2xl bg-base-700">asdsas</div>
            <div className="w-full p-4 rounded-2xl bg-base-700">asdsas</div>
            <div className="w-full p-4 rounded-2xl bg-base-700">asdsas</div>
         </div>
      </Section>
   );
};

export default Projects;
