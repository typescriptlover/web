import { ReactNode, RefObject } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type DefaultProps = {
   children: ReactNode;
   className?: string;
   duration?: number;
   delay?: number;
   noExit?: true;
};

type Props<T extends string> = {
   [K in T]?: number;
} & DefaultProps;

type LayoutProps = {
   layoutId: string;
   layout: boolean | 'position' | 'size' | 'preserve-aspect' | undefined;
} & DefaultProps;

const Animations = {
   FadeY: ({ children, className, duration, delay, noExit, y }: Props<'y'>) => {
      return (
         <motion.span
            initial={{ opacity: 0, y: y || 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={noExit ? undefined : { opacity: 0, y: y || 15 }}
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.15,
               delay: delay ?? 0,
            }}
            className={clsx(className, 'will-change inline-block')}
         >
            {children}
         </motion.span>
      );
   },
   FadeX: ({ children, className, duration, delay, noExit, x }: Props<'x'>) => {
      return (
         <motion.span
            initial={{ opacity: 0, x: x || 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={noExit ? undefined : { opacity: 0, x: x || 15 }}
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.15,
               delay: delay ?? 0,
            }}
            className={clsx(className, 'will-change inline-block')}
         >
            {children}
         </motion.span>
      );
   },
   Scale: ({ children, className, delay, duration, scale }: Props<'scale'>) => {
      return (
         <motion.span
            initial={{ opacity: 0, scale: scale || 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: scale || 0 }}
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.15,
               delay: delay ?? 0,
            }}
            className={clsx(className, 'will-change inline-block')}
         >
            {children}
         </motion.span>
      );
   },
   Layout: ({
      children,
      className,
      delay,
      duration,
      layoutId,
      layout,
   }: LayoutProps) => {
      return (
         <motion.span
            layoutId={layoutId}
            layout={layout}
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.4,
            }}
            className={clsx(className, 'inline-block')}
         >
            {children}
         </motion.span>
      );
   },
};

export default Animations;
