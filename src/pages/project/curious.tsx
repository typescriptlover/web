import Project from '@/layouts/Project';

const curious = () => {
   const technologies = [
      'TypeScript',
      'Node.js',
      'tRPC',
      'Express.js',
      'PostgreSQL',
      'Docker',
      'Prisma',
      'Next.js',
      'TailwindCSS',
   ];

   return (
      <Project
         name="curious"
         description="Social platform for the curious."
         techs={technologies}
         image="/img/curious/landing.png"
      />
   );
};

export default curious;
