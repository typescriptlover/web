import { FC, ReactNode } from 'react';
import { AnimationProps, motion, Transition } from 'framer-motion';
import clsx from 'clsx';

type Props<T extends string> = {
   [key in T]?: number;
} & {
   children: ReactNode;
   className?: string;
   duration?: number;
   delay?: number;
};

const Animations = {
   FadeY: ({ children, className, duration, delay, y }: Props<'y'>) => {
      return (
         <motion.div
            initial={{ opacity: 0, y: y || 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: y || 15 }}
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.15,
               delay: delay ?? 0,
            }}
            className={clsx(className, 'will-change')}
         >
            {children}
         </motion.div>
      );
   },
   Scale: ({ children, className, delay, duration, scale }: Props<'scale'>) => {
      return (
         <motion.div
            initial={{ opacity: 0, scale: scale || 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: scale || 0 }}
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.15,
               delay: delay ?? 0,
            }}
            className={clsx(className, 'will-change')}
         >
            {children}
         </motion.div>
      );
   },
};

export default Animations;
