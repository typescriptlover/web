import { FC, useState } from 'react';

import Animations from '@/components/ui/Animations';
import { Project } from '@/types/interfaces';
import projects from '@/data/projects';

interface ProjectProps {
   project: Project;
   updateProject(project: Project): void;
}

// TODO: make tags smoothly scrollable on the x axis
const Project: FC<ProjectProps> = ({ project, updateProject }) => {
   return (
      <button
         onClick={() => updateProject(project)}
         className="flex flex-col w-full h-full py-5 text-left transition duration-200 ease-linear rounded-xl bg-base-850 hover:ring-4 focus:ring-4 hover:ring-base-850 focus:ring-base-850 group"
      >
         <div className="flex items-center justify-between w-full px-5">
            <div>
               <div className="text-xl font-semibold tracking-tight font-karla">
                  {project.name}
               </div>
               <div className="text-sm font-medium tracking-wide text-zinc-400">
                  {project.type}
               </div>
            </div>
            <div>
               <span className="inline-block text-xl transition duration-200 ease-linear text-zinc-500 group-hover:text-zinc-400 group-focus:text-zinc-400 group-hover:scale-110 group-focus:scale-110 group-hover:-translate-y-1 group-focus:-translate-y-1 group-hover:translate-x-1 group-focus:translate-x-1 will-change">
                  <i className="fa-regular fa-arrow-up-right"></i>
               </span>
            </div>
         </div>
         <hr className="w-full my-5 border-t border-base-800" />
         <div className="flex flex-col justify-between flex-1 w-full px-5">
            <div className="text-sm font-medium text-zinc-300">
               {project.description}
            </div>
            <div className="inline-flex items-center mt-6 text-xs font-medium gap-x-3 text-zinc-400">
               <span className="text-zinc-500">
                  <i className="fa-duotone fa-briefcase" />
               </span>
               {project.active}
            </div>
         </div>
      </button>
   );
};

// TODO: make project clickable to external project route
const Projects: FC = () => {
   const [project, setProject] = useState<false | Project>(false);

   function updateProject(project: Project) {
      setProject(project);
   }

   return (
      <div key="projects">
         <Animations.FadeY
            y={40}
            duration={0.4}
            delay={0.5}
            className="flex items-center justify-between px-4 py-3 transition duration-200 ease-linear border-2 rounded-lg bg-base-950 border-base-900"
         >
            <div>
               <h1 className="text-2xl font-semibold tracking-tight font-karla">
                  Projects
               </h1>
               <h2 className="text-sm text-zinc-400">
                  A collection of my favorite personal and freelance projects.
               </h2>
            </div>
            <div className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-lg bg-base-800">
               🖥
            </div>
         </Animations.FadeY>
         <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
            {projects.map((project, projectIndex) => (
               <Animations.FadeY
                  key={projectIndex}
                  y={60}
                  duration={0.4}
                  delay={0.7 + 0.2 * projectIndex}
               >
                  <Project project={project} updateProject={updateProject} />
               </Animations.FadeY>
            ))}
         </div>
      </div>
   );
};

export default Projects;
