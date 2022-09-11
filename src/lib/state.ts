import { atom } from 'jotai';
import { Sections } from '@/types/interfaces';

export const sections = atom<Sections>([
   {
      name: 'About',
      icon: 'file-lines',
      ref: false,
   },
   {
      name: 'Projects',
      icon: 'grid-2',
      ref: false,
   },
   {
      name: 'Skills',
      icon: 'desktop',
      ref: false,
   },
]);
