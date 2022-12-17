import { NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

import getProjectContent from '@/lib/getProjectContent';
import Project from '@/layouts/Project';
import getMDX from '@/lib/getMDX';

interface Props {
   content: MDXRemoteSerializeResult;
}

const noca: NextPage<Props> = ({ content }) => {
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
         content={content}
      />
   );
};

export const getStaticProps = async () => {
   const data = await getProjectContent('noca');
   const content = await getMDX(data);

   return { props: { content } };
};

export default noca;
