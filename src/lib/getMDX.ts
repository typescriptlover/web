import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkExternalLinks from 'remark-external-links';

export default async function getMDX(content: string) {
   return serialize(content, {
      mdxOptions: {
         // TODO: figure out the jsxDev issue in development when running mdx content
         development: false,
         remarkPlugins: [remarkGfm, remarkExternalLinks],
         rehypePlugins: [],
      },
   });
}
