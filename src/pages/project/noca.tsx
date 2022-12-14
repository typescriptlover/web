import Project from '@/layouts/Project';

const noca = () => {
   return (
      <Project
         name="noca"
         description="Infinitely spatial and interactive note canvas platform."
         image="/img/noca/introduction.png"
         link="https://noca.vercel.app"
         github="noca"
         techs={[
            'TypeScript',
            'React.js',
            'Vite.js',
            'TailwindCSS',
            'Framer Motion',
         ]}
      />
   );
};

export default noca;
