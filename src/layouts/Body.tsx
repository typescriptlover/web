import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const Body: FC<Props> = ({ children }) => {
   return (
      <body className="flex flex-col min-h-screen px-5 text-white selection:bg-base-100/50 font-inter opacity-95 bg-base-1000">
         {children}
      </body>
   );
};

export default Body;
