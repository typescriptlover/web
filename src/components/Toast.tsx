import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';

const defaultClasses =
   '!rounded-xl !drop-shadow-2xl !text-sm !font-semibold !tracking-tight !py-1.5 !px-3';

const Toast = () => {
   return (
      <Toaster
         gutter={6}
         containerClassName="!fixed !z-[100] !inset-0 my-[2rem]"
         toastOptions={{
            className: clsx(defaultClasses, '!bg-base-650 !text-white'),
         }}
      />
   );
};

export default Toast;
