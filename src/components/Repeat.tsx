import Box from '@/layouts/Box';
import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
   times: number;
   className?: string;
}

const Repeat: FC<Props> = ({ children, times, className }) => {
   return (
      <div className={className}>
         {Array(times)
            .fill(0)
            .map(() => children)}
      </div>
   );
};

export default Repeat;
