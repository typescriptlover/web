import Animations from '../ui/Animations';
import Contact from './Contact';

const Hero = () => {
   return (
      <div key="hero">
         <div className="flex items-center justify-between w-full">
            <div className="inline-flex flex-col">
               <Animations.Layout
                  layoutId="name"
                  layout="position"
                  duration={0.5}
                  className="text-4xl font-bold tracking-tight font-karla"
               >
                  Vignesh
               </Animations.Layout>
               <Animations.FadeY
                  y={10}
                  duration={0.4}
                  delay={0.2}
                  className="-mt-1 text-xl font-light tracking-tight font-karla"
               >
                  Wadhwani
               </Animations.FadeY>
            </div>
         </div>
         <div className="w-full mt-6">
            <Animations.FadeY
               y={25}
               duration={0.4}
               delay={0.5}
               className="leading-7 text-zinc-300"
            >
               I'm a 19-year-old{' '}
               <span className="px-1.5 py-0.5 text-zinc-200 rounded-md bg-base-600/25">
                  software engineer
               </span>{' '}
               born and living in{' '}
               <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-white to-blue-400">
                  Willemstad, Curacao
               </span>{' '}
               who specializes in full-stack development, focused on
               architecting and building large scale applications, scalable
               applications, beautiful interfaces and learning, using a wide
               variety of skills to complete any task.
            </Animations.FadeY>
         </div>
      </div>
   );
};

export default Hero;
