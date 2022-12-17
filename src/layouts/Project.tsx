import { FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

import Meta from '@/components/Meta';
import Animations from '@/components/ui/Animations';
import Link from '@/components/ui/Link';
import { SEO } from '@/lib/config';
import Box from './Box';
import Palette from '@/components/ui/Palette';
import Font from '@/components/ui/Font';

interface Props {
   name: string;
   description?: string;
   techs?: string[];
   image?: string;
   link?: string;
   github?: string;
   content?: MDXRemoteSerializeResult;
}

const Project: FC<Props> = ({
   name,
   description,
   techs,
   image,
   link,
   github,
   content,
}) => {
   return (
      <Box>
         <Meta
            title={name}
            description={description}
            canonical={SEO.canonical + '/project/' + name}
            images={
               image
                  ? [
                       {
                          url: SEO.canonical + image,
                          width: 1079,
                          height: 551,
                          type: 'image/png',
                       },
                    ]
                  : undefined
            }
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
                     className="block mt-2"
                     y={10}
                     duration={0.4}
                  >
                     <div className="font-medium tracking-tight text-zinc-300 font-karla">
                        <span className="inline-block mr-2 text-sm text-zinc-500 rotate-6">
                           <i className="fa-solid fa-quote-left"></i>
                        </span>
                        {description}
                     </div>
                  </Animations.FadeY>
               )}
               {(link || github) && (
                  <div className="flex items-center mt-2 gap-x-4">
                     {link && (
                        <Animations.FadeY y={10} delay={0.4} duration={0.4}>
                           <a
                              target="_blank"
                              href={link}
                              className="font-medium tracking-tight transition duration-200 ease-linear text-zinc-400 hover:text-zinc-200 hover:underline font-karla"
                           >
                              <span className="mr-1 text-sm text-zinc-500">
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
                              className="font-medium tracking-tight transition duration-200 ease-linear text-zinc-400 hover:text-zinc-200 hover:underline font-karla"
                           >
                              <span className="mr-1 text-sm text-zinc-500">
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
                     <h2 className="text-sm font-semibold uppercase text-zinc-400">
                        technologies
                     </h2>
                     <div className="mt-2.5 flex flex-wrap gap-2">
                        {techs.map((tech) => (
                           <span className="px-2 py-1 text-xs font-medium rounded-lg bg-base-850">
                              {tech}
                           </span>
                        ))}
                     </div>
                  </div>
               )}
               {image && (
                  <div className="mt-5 overflow-hidden border shadow-2xl rounded-2xl border-base-900">
                     <img src={image} className="w-full h-full" />
                  </div>
               )}
               {content && (
                  <div className="mt-6 prose prose-invert">
                     <MDXRemote
                        {...content}
                        components={{
                           Palette: Palette,
                           Font: Font,
                        }}
                     />
                  </div>
               )}
            </div>
         </div>
      </Box>
   );
};

export default Project;
