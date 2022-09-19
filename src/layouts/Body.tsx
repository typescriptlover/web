import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const Body: FC<Props> = ({ children }) => {
   return (
      <body className="px-8 text-white font-inter opacity-95 bg-base-1000 selection:bg-base-200/25">
         {children}
      </body>
   );
};

export default Body;
