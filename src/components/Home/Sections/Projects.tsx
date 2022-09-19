import Animations from '@/components/ui/Animations';
import { FC } from 'react';

interface ProjectProps {
   image: string;
   name: string;
   type: 'personal' | 'freelance';
   description: string;
   tags: string[];
}
// TODO: make tags smoothly scrollable on the x axis
const Project: FC<ProjectProps> = ({
   image,
   name,
   type,
   description,
   tags,
}) => {
   return (
      <div className="flex flex-col w-full h-full py-5 transition duration-200 ease-linear rounded-xl bg-base-850 hover:ring-4 hover:ring-base-850 group">
         <div className="flex items-center justify-between px-5">
            <div className="inline-flex items-center gap-x-3">
               <img className="rounded-lg shadow-2xl w-14 h-14" src={image} />
               <div>
                  <div className="text-lg font-semibold">{name}</div>
                  <div className="text-sm font-medium tracking-tight text-zinc-400">
                     {type}
                  </div>
               </div>
            </div>
            <div>
               <span className="inline-block text-xl transition duration-200 ease-linear text-zinc-500 group-hover:text-zinc-400 group-hover:scale-110 will-change">
                  <i className="fa-solid fa-arrow-up-right-and-arrow-down-left-from-center"></i>
               </span>
            </div>
         </div>
         <hr className="my-5 border-t border-base-800" />
         <div className="flex flex-col justify-between flex-1 px-5">
            <div className="text-sm font-medium text-zinc-300">
               {description}
            </div>
            <div className="flex items-center gap-1 mt-5 overflow-hidden flex-nowrap">
               {tags.map((tag, tagIndex) => (
                  <span
                     key={tagIndex}
                     className="text-xs text-zinc-400 font-medium bg-base-700/50 rounded py-0.5 px-1.5"
                  >
                     {tag}
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
};

// TODO: better alternative to hardcoded projects
const Projects: FC = () => {
   const projects: ProjectProps[] = [
      {
         image: 'https://placekitten.com/69/69',
         name: 'datapanel',
         type: 'freelance',
         description: 'Wrote a large, beautiful and performant web front.',
         tags: ['javascript', 'next', 'tailwindcss'],
      },
      {
         image: 'https://placekitten.com/69/69',
         name: 'discord.style',
         type: 'freelance',
         description:
            'Built and deployed a scalable backend, actively used by nK users.',
         tags: [
            'typescript',
            'node',
            'graphql',
            'postgres',
            'prisma',
            'docker',
         ],
      },
      {
         image: 'https://placekitten.com/69/69',
         name: 'raye',
         type: 'personal',
         description:
            'Built and architected a fast pub/sub server from scratch, inspired by redis.',
         tags: ['go'],
      },
      {
         image: 'https://placekitten.com/69/69',
         name: 'noca',
         type: 'personal',
         description: 'Wrote an infinitely spatial note canvas app.',
         tags: ['typescript', 'next', 'serverless', 'sqlite', 'prisma'],
      },
      {
         image: 'https://placekitten.com/69/69',
         name: 'curious',
         type: 'personal',
         description:
            'Built a full-stack questions and answers app, inspired by curiouscat.',
         tags: [
            'typescript',
            'next',
            'tailwindcss',
            'node',
            'graphql',
            'postgres',
            'prisma',
            'redis',
            'docker',
         ],
      },
   ];

   return (
      <div key="projects">
         <Animations.FadeY
            y={40}
            duration={0.4}
            delay={0.5}
            className="flex items-center justify-between px-4 py-3 transition duration-200 ease-linear border rounded-lg bg-base-950 border-base-900"
         >
            <div>
               <h1 className="text-2xl font-semibold tracking-tight font-karla">
                  Projects
               </h1>
               <h2 className="text-sm text-zinc-400">
                  A collection of my personal and freelance projects.
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
                  <Project {...project} />
               </Animations.FadeY>
            ))}
         </div>
      </div>
   );
};

export default Projects;
