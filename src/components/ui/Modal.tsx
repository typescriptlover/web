import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {
   Dispatch,
   FC,
   ReactNode,
   SetStateAction,
   useEffect,
   useState,
   useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import useClickOutside from '@/hooks/useClickOutside';
import clsx from 'clsx';

interface Props {
   children: ReactNode;
   showModal: boolean;
   setShowModal: Dispatch<SetStateAction<boolean>>;
   onClose?: any;
   className?: string;
}
const Modal: FC<Props> = ({
   children,
   showModal,
   setShowModal,
   onClose,
   className,
}) => {
   const ref = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);
   const [scrolled, setScrolled] = useState<boolean>(false);

   const close = () => {
      if (onClose) onClose();
      setShowModal(false);
      setScrolled(false);
   };

   useClickOutside(showModal, ref, close);

   useEffect(() => {
      document.body.style.overflowY = showModal ? 'hidden' : 'auto';
      if (containerRef.current) {
         containerRef.current.style.overflowY = showModal ? 'auto' : 'hidden';
      }
   }, [showModal, containerRef.current]);

   useEffect(() => {
      const checkScroll = (e: Event) => {
         const target = e.target as HTMLElement;
         setScrolled(target && target.scrollTop > 10);
      };

      containerRef.current?.addEventListener('scroll', checkScroll);

      return () =>
         containerRef.current?.removeEventListener('scroll', checkScroll);
   }, [showModal, containerRef, containerRef.current]);

   return createPortal(
      <AnimatePresence mode="wait">
         {showModal && (
            <motion.div
               ref={containerRef}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ ease: 'easeInOut', duration: 0.4 }}
               className={clsx(
                  'fixed inset-0 overflow-y-auto z-[500] bg-black/60 px-4 py-8'
               )}
            >
               <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 45 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 45 }}
                  transition={{ ease: 'easeInOut', duration: 0.4 }}
                  className={clsx(
                     'relative w-full mx-auto shadow-2xl bg-base-950 border border-base-850',
                     className
                  )}
               >
                  {children}
                  <div className="absolute top-4 right-5">
                     <button
                        onClick={close}
                        className="text-xl transition duration-200 ease-linear opacity-50 hover:scale-105 will-change hover:opacity-100"
                     >
                        <i className="fa-regular fa-xmark"></i>
                     </button>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>,
      document.body
   );
};

export default Modal;
