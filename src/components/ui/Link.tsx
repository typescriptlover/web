import { FC, ReactNode } from 'react';
import { default as NextLink, LinkProps } from 'next/link';

interface Props extends LinkProps {
   children: ReactNode;
   className?: string;
}

const Link: FC<Props> = ({ children, className, ...props }) => {
   return (
      <NextLink {...props}>
         <a className={className}>{children}</a>
      </NextLink>
   );
};

export default Link;
