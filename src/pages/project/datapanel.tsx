import Project from '@/layouts/Project';

const datapanel = () => {
   return (
      <Project
         name="datapanel"
         description="A neat and performant web front for large dataset manipulation."
         image="/img/datapanel/dashboard.png"
         techs={[
            'JavaScript',
            'Next.js',
            'TailwindCSS',
            'Hookstate',
            'CI/CD',
            'Docker',
         ]}
      />
   );
};

export default datapanel;
