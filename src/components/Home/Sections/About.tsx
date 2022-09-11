import { FC } from 'react';
import Section from '@/ui/Section';

const About: FC = () => {
   return (
      <Section
         title="About"
         description="A concise introduction to who i am and what my journey is."
      >
         <div className="mt-6 font-medium leading-8 text-center sm:text-left text-trueGray-300">
            👋 I'm a self taught software engineer born and raised in{' '}
            Willemstad, Curacao who specialises in full-stack development
            including large scale applications from front-end to back-end, using
            a wide variety of skills to complete any task. I've always had a
            passion for coding, i remember seeing it for the first time when i
            was just about 12 years old and thinking "this looks so hard" it
            intrigued me like nothing i'd ever seen before, i knew i wanted to
            master it and ever since then i haven't stopped learning and writing
            code and i became very good at it.
         </div>
      </Section>
   );
};

export default About;
