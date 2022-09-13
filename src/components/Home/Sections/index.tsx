import { FC } from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

const Sections: FC = () => {
   return (
      <div id="sections" className="flex flex-col mt-20 gap-y-20">
         <About />
         <Projects />
         <Skills />
      </div>
   );
};

export default Sections;
