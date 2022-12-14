import Meta from '@/components/Meta';
import Animations from '@/components/ui/Animations';
import Link from '@/components/ui/Link';
import { SEO } from '@/lib/config';
import { FC, ReactNode } from 'react';
import Box from './Box';

interface Props {
   name: string;
   description?: string;
   tags?: string[];
   children?: ReactNode;
   techs?: string[];
   image?: string;
   link?: string;
   github?: string;
}

const Project: FC<Props> = ({
   name,
   description,
   tags,
   children,
   techs,
   image,
   link,
   github,
}) => {
   return (
      <Box>
         <Meta
            title={name}
            description={description}
            canonical={SEO.canonical + 'project/' + name}
         />
         <div className="relative">
            <div className="absolute top-0 left-0 -ml-0 sm:-ml-[5rem] -mt-[2rem] sm:-mt-0">
               <Animations.Scale scale={0.5} duration={0.4} delay={0.2}>
                  <Link
                     href="/"
                     className="flex items-center justify-center w-10 h-10 rounded-xl bg-base-900 group"
                  >
                     <span className="inline-block text-xl transition duration-200 ease-linear text-zinc-500 group-hover:text-zinc-400 group-hover:scale-110 group-hover:-translate-y-1 group-hover:-translate-x-1 will-change">
                        <i className="fa-regular fa-arrow-up-left"></i>
                     </span>
                  </Link>
               </Animations.Scale>
            </div>
            <div className="mt-7 sm:mt-0">
               <Animations.FadeY y={10} duration={0.4}>
                  <h1 className="text-4xl font-semibold tracking-tight font-karla">
                     {name}
                  </h1>
               </Animations.FadeY>
               {description && (
                  <Animations.FadeY
                     delay={0.2}
                     className="mt-2 block"
                     y={10}
                     duration={0.4}
                  >
                     <div className="font-medium text-zinc-300 tracking-tight font-karla">
                        <span className="mr-2 text-zinc-500 text-sm rotate-6 inline-block">
                           <i className="fa-solid fa-quote-left"></i>
                        </span>
                        {description}
                     </div>
                  </Animations.FadeY>
               )}
               {(link || github) && (
                  <div className="mt-2 flex items-center gap-x-4">
                     {link && (
                        <Animations.FadeY y={10} delay={0.4} duration={0.4}>
                           <a
                              target="_blank"
                              href={link}
                              className="font-medium text-zinc-400 transition duration-200 ease-linear hover:text-zinc-200 hover:underline tracking-tight font-karla"
                           >
                              <span className="text-sm mr-1 text-zinc-500">
                                 <i className="fa-solid fa-fw fa-link"></i>
                              </span>
                              {link}
                           </a>
                        </Animations.FadeY>
                     )}
                     {github && (
                        <Animations.FadeY y={10} delay={0.5} duration={0.4}>
                           <a
                              target="_blank"
                              href={`https://github.com/typescriptlover/${github}`}
                              className="font-medium text-zinc-400 transition duration-200 ease-linear hover:text-zinc-200 hover:underline tracking-tight font-karla"
                           >
                              <span className="text-sm mr-1 text-zinc-500">
                                 <i className="fa-brands fa-fw fa-github"></i>
                              </span>
                              {github}
                           </a>
                        </Animations.FadeY>
                     )}
                  </div>
               )}
               <hr className="my-5 border-t border-base-900" />
               {techs && techs.length && (
                  <div>
                     <h2 className="text-sm uppercase font-semibold text-zinc-400">
                        technologies
                     </h2>
                     <div className="mt-2.5 flex flex-wrap gap-2">
                        {techs.map((tech) => (
                           <span className="text-xs font-medium bg-base-850 rounded-lg py-1 px-2">
                              {tech}
                           </span>
                        ))}
                     </div>
                  </div>
               )}
               {image && (
                  <div className="mt-5 rounded-2xl overflow-hidden shadow-2xl border border-base-900">
                     <img src={image} className="w-full h-full" />
                  </div>
               )}
            </div>
         </div>
      </Box>
   );
};

export default Project;
