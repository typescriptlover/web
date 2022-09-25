import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export const usePreserveScroll = () => {
   const router = useRouter();
   const scrollPositions = useRef<{ [url: string]: number }>({});

   useEffect(() => {
      const onRouteChangeStart = () => {
         const url = router.pathname;
         scrollPositions.current[url] = window.scrollY;
      };

      const onRouteChangeComplete = (url: any) => {
         if (scrollPositions.current[url]) {
            setTimeout(() => {
               window.scroll({
                  top: scrollPositions.current[url],
                  behavior: 'smooth',
               });
            }, 450);
         }
      };

      router.events.on('routeChangeStart', onRouteChangeStart);
      router.events.on('routeChangeComplete', onRouteChangeComplete);

      return () => {
         router.events.off('routeChangeStart', onRouteChangeStart);
         router.events.off('routeChangeComplete', onRouteChangeComplete);
      };
   }, [router]);
};
