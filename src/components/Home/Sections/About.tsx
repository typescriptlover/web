import { FC } from 'react';
import Section from '@/ui/Section';

const About: FC = () => {
   return (
      <Section
         title="About"
         description="A concise introduction to who i am and what my journey is."
      >
         <div className="mt-6 font-medium leading-8 text-center sm:text-left text-trueGray-300">
            👋 I'm a self taught software engineer born and raised in
            Willemstad, Curacao who specializes in full-stack development
            including large scale applications from front-end to back-end, using
            a wide variety of skills to complete any task. I've always had a
            passion for coding; i remember seeing it for the first time when I
            was just about 13 years old; it intrigued me like nothing I'd ever
            seen before. i knew i wanted to master it and ever since then i
            haven't stopped learning and writing code; i became very good at it,
            from PHP HTML CSS to complex and modern frameworks, it has been a
            fun obstacle. My dream is to work remotely while creating many
            projects, whether it be open source or a product that I'm passionate
            about, as I learn more things along the way from friends I'll meet.
         </div>
      </Section>
   );
};

export default About;
