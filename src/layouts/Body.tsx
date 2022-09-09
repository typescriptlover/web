import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const Body: FC<Props> = ({ children }) => {
   return (
      <body className="flex flex-col min-h-screen px-5 text-white font-inter opacity-95 bg-base-1000">
         {children}
      </body>
   );
};

export default Body;
