import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
   return <div className="max-w-4xl mx-auto mt-16 sm:mt-24">{children}</div>;
};

export default Container;
