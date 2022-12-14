import { Project } from '@/types/interfaces';

const projects: Project[] = [
   {
      name: 'datapanel',
      type: 'work',
      description: 'A neat, and performant web front for data manipulation.',
      active: 'May 2022 - Dec 2022',
      route: 'datapanel',
   },
   {
      name: 'discordstyle',
      type: 'work',
      description:
         'A large-scale back end, actively used by 366,000 unique users.',
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
         'Interact with eachother through a social platform meant for curiosity.',
      active: '2021-current',
      route: 'curious',
   },
];

export default projects;
