import Projects from './Projects';
import Skills from './Skills';

const index = () => {
   return (
      <div className="flex flex-col mt-24 gap-y-16">
         <Projects />
         <Skills />
      </div>
   );
};

export default index;
