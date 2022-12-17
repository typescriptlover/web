import { FC, useState } from 'react';

import Animations from '@/components/ui/Animations';
import { IProject } from '@/types/interfaces';
import projects from '@/data/projects';
import { useRouter } from 'next/router';
import Link from '@/components/ui/Link';

interface ProjectProps {
   project: IProject;
}

// TODO: make tags smoothly scrollable on the x axis
const Project: FC<ProjectProps> = ({ project }) => {
   return (
      <Link
         href={`/project/${project.route}`}
         scroll={false}
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
      </Link>
   );
};

const Projects: FC = () => {
   return (
      <div key="projects">
         <Animations.FadeY
            y={40}
            duration={0.4}
            delay={0.5}
            animationKey="projectsTop"
            once={true}
            className="flex items-center justify-between px-4 py-3 transition duration-200 ease-linear border-2 rounded-lg gap-x-4 bg-base-950 border-base-900"
         >
            <div>
               <h1 className="text-2xl font-semibold tracking-tight font-karla">
                  Projects
               </h1>
               <h2 className="text-sm text-zinc-400">
                  A collection of my personal and work projects I've developed.
               </h2>
            </div>
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-lg rounded-lg bg-base-800">
               🖥
            </div>
         </Animations.FadeY>
         <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
            {projects.map((project, projectIndex) => (
               <Animations.FadeY
                  key={projectIndex}
                  y={60}
                  duration={0.4}
                  delay={0.7 + 0.1 * projectIndex}
                  animationKey={project.name}
                  once={true}
               >
                  <Project project={project} />
               </Animations.FadeY>
            ))}
         </div>
      </div>
   );
};

export default Projects;
