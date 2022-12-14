import Project from '@/layouts/Project';
import { getProjectData } from '@/lib/helpers';

const discordstyle = () => {
   return (
      <Project
         name="discordstyle"
         description="Online library for finding and sharing Discord Templates."
         link="https://discord.style"
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
