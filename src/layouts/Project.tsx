import Animations from '@/components/ui/Animations';
import Link from '@/components/ui/Link';
import { FC, ReactNode } from 'react';

interface Props {
   name: string;
   tags?: string[];
   children?: ReactNode;
   empty?: boolean;
}

const Project: FC<Props> = ({ name, tags, children, empty }) => {
   return (
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
            <hr className="my-5 border-t border-base-900" />
            <div>
               {empty || !children ? (
                  <div className="text-sm italic font-medium text-zinc-400">
                     No content on this page yet.
                  </div>
               ) : (
                  children
               )}
            </div>
         </div>
      </div>
   );
};

export default Project;
