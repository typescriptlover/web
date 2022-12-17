import { IProject } from '@/types/interfaces';

const projects: IProject[] = [
   {
      name: 'datapanel',
      type: 'work',
      description:
         'An intuitive and performant web application for dataset manipulation.',
      active: 'May 2022 - Dec 2022',
      route: 'datapanel',
   },
   {
      name: 'discordstyle',
      type: 'work',
      description:
         'A back-end application actively serving 366,000 unique users.',
      active: 'Mar 2021 - May 2022',
      route: 'discordstyle',
   },
   {
      name: 'noca',
      type: 'personal',
      description:
         'Write and manage your thoughts in an infinitely spatial and interactive canvas.',
      active: '2021-current',
      route: 'noca',
   },
   {
      name: 'curious',
      type: 'personal',
      description:
         'Interact with users on a platform designed to faciliate engagement with curiosity.',
      active: '2021-current',
      route: 'curious',
   },
];

export default projects;
