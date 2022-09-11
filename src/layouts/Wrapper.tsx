import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const Wrapper: FC<Props> = ({ children }) => {
   return <div className="max-w-5xl py-6 mx-auto sm:py-10">{children}</div>;
};

export default Wrapper;
