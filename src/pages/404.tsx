import Animations from '@/components/ui/Animations';
import { AnimatePresence } from 'framer-motion';

const NotFound = () => {
   return (
      <div className="flex flex-col items-center justify-center flex-grow">
         <Animations.FadeY y={20} duration={0.4} delay={0.2}>
            <h1 className="text-5xl italic font-semibold tracking-wider text-base-600 font-karla">
               404
            </h1>
         </Animations.FadeY>
         <h2 className="text-4xl font-medium tracking-tight text-zinc-200">
            nothing here
         </h2>
      </div>
   );
};

export default NotFound;
