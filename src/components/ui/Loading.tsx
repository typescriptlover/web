import clsx from 'clsx';
import { FC } from 'react';

interface Props {
   className?: string;
}

const Loading: FC<Props> = ({ className }) => {
   return (
      <svg
         className={clsx('spinner text-white', className)}
         viewBox="0 0 50 50"
      >
         <circle
            className="path"
            cx="25"
            cy="25"
            r="15"
            fill="none"
            strokeWidth="4"
         ></circle>
      </svg>
   );
};

export default Loading;
