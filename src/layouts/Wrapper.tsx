import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const Wrapper: FC<Props> = ({ children }) => {
   return (
      <div className="flex flex-col w-full max-w-2xl min-h-screen py-12 mx-auto">
         {children}
      </div>
   );
};

export default Wrapper;
