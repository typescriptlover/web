import { ReactNode, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { atom, useAtom } from 'jotai';

import * as state from '@/lib/state';

type DefaultProps = {
   children: ReactNode;
   className?: string;
   duration?: number;
   delay?: number;
   noExit?: true;
   animationKey?: string;
   once?: true;
   initial?: false;
};

type Props<T extends string> = {
   [K in T]?: number;
} & DefaultProps;

type LayoutProps = {
   layoutId: string;
   layout: boolean | 'position' | 'size' | 'preserve-aspect' | undefined;
} & DefaultProps;

const animationsAdd = atom(
   (get) => get(state.animations),
   (get, set, key: string) => {
      if (!get(state.animations).includes(key)) {
         set(state.animations, [...get(state.animations), key]);
      }
   }
);

const Animations = {
   FadeY: ({
      children,
      className,
      duration,
      delay,
      noExit,
      animationKey,
      once,
      initial,
      y,
   }: Props<'y'>) => {
      const [animations, add] = useAtom(animationsAdd);

      const disabled = useMemo(() => {
         if (once && animationKey && animations.includes(animationKey)) {
            return true;
         }
         return false;
      }, [animations, once, animationKey]);

      useEffect(() => {
         if (once && animationKey) {
            add(animationKey);
         }
      }, [once, animationKey]);

      return (
         <motion.div
            initial={initial || disabled ? false : { opacity: 0, y: y || 15 }}
            animate={disabled ? false : { opacity: 1, y: 0 }}
            exit={noExit || disabled ? undefined : { opacity: 0, y: y || 15 }}
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.15,
               delay: delay ?? 0,
            }}
            className={clsx(className ?? 'inline-block', 'will-change')}
         >
            {children}
         </motion.div>
      );
   },
   FadeX: ({
      children,
      className,
      duration,
      delay,
      noExit,
      animationKey,
      once,
      initial,
      x,
   }: Props<'x'>) => {
      const [animations, add] = useAtom(animationsAdd);

      const disabled = useMemo(() => {
         if (once && animationKey && animations.includes(animationKey)) {
            return true;
         }
         return false;
      }, [animations, once, animationKey]);

      useEffect(() => {
         if (once && animationKey) {
            add(animationKey);
         }
      }, [once, animationKey]);

      return (
         <motion.div
            initial={
               initial === false || disabled
                  ? false
                  : { opacity: 0, x: x || 15 }
            }
            animate={disabled ? false : { opacity: 1, x: 0 }}
            exit={noExit || disabled ? undefined : { opacity: 0, x: x || 15 }}
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.15,
               delay: delay ?? 0,
            }}
            className={clsx(className ?? 'inline-block', 'will-change')}
         >
            {children}
         </motion.div>
      );
   },
   Scale: ({
      children,
      className,
      delay,
      duration,
      noExit,
      animationKey,
      once,
      initial,
      scale,
   }: Props<'scale'>) => {
      const [animations, add] = useAtom(animationsAdd);

      const disabled = useMemo(() => {
         if (once && animationKey && animations.includes(animationKey)) {
            return true;
         }
         return false;
      }, [animations, once, animationKey]);

      useEffect(() => {
         if (once && animationKey) {
            add(animationKey);
         }
      }, [animations, once, animationKey]);

      return (
         <motion.div
            initial={
               initial === false || disabled
                  ? false
                  : { opacity: 0, scale: scale || 0 }
            }
            animate={disabled ? false : { opacity: 1, scale: 1 }}
            exit={
               noExit || disabled
                  ? undefined
                  : { opacity: 0, scale: scale || 0 }
            }
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.15,
               delay: delay ?? 0,
            }}
            className={clsx(className ?? 'inline-block', 'will-change')}
         >
            {children}
         </motion.div>
      );
   },
   Layout: ({
      children,
      className,
      duration,
      layoutId,
      layout,
   }: LayoutProps) => {
      return (
         <motion.div
            layoutId={layoutId}
            layout={layout}
            transition={{
               ease: 'easeInOut',
               duration: duration ?? 0.4,
            }}
            className={clsx(className ?? 'inline-block')}
         >
            {children}
         </motion.div>
      );
   },
};

export default Animations;
