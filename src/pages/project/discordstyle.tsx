import Project from '@/layouts/Project';

const discordstyle = () => {
   return (
      <Project
         name="discordstyle"
         description="Online library for finding and sharing Discord Templates."
         link="https://discord.style"
         image="/img/discordstyle/browse.png"
         techs={[
            'TypeScript',
            'Node.js',
            'Express.js',
            'Apollo Server',
            'GraphQL',
            'PostgreSQL',
            'Docker',
         ]}
      />
   );
};

export default discordstyle;
