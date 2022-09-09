import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const Wrapper: FC<Props> = ({ children }) => {
   return <div className="max-w-5xl mx-auto py-10">{children}</div>;
};

export default Wrapper;
