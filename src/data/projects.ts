import { Project } from '@/types/interfaces';

const projects: Project[] = [
   {
      name: 'datapanel',
      type: 'freelance',
      description: 'Wrote a large, beautiful and performant web front.',
      active: '2022-current',
      route: 'datapanel',
   },
   {
      name: 'discord.style',
      type: 'freelance',
      description:
         'Built and deployed a scalable backend, actively used by nK users.',
      active: '2021-2022',
      route: 'discordstyle',
   },
   {
      name: 'raye',
      type: 'personal',
      description:
         'Built and architected a fast pub/sub server from scratch, inspired by redis.',
      active: '2021-?',
      route: 'raye',
   },
   {
      name: 'noca',
      type: 'personal',
      description:
         'Wrote a serverless, infinitely spatial note canvas web app.',
      active: '2021-?',
      route: 'noca',
   },
   {
      name: 'curious',
      type: 'personal',
      description: 'Built a full-stack questions and answers social app.',
      active: '2021-?',
      route: 'curious',
   },
];

export default projects;
