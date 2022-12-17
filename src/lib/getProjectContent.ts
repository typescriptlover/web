import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function getProjectContent(project: string) {
   const fileContents = fs.readFileSync(
      path.join(`src/content/${project}.mdx`),
      'utf8'
   );
   const { content } = matter(fileContents);
   return content;
}
