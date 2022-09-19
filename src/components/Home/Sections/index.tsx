import Projects from './Projects';
import Skills from './Skills';

const index = () => {
   return (
      <div className="flex flex-col mt-20 gap-y-16">
         <Projects />
         <Skills />
      </div>
   );
};

export default index;
