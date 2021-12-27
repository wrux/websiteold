import React, { FC, HTMLProps } from 'react';
import cn from 'clsx';
import { Typography } from 'components/common';

interface NavigationProps {
  className?: string;
  label: string;
}

export const NavigationItem: FC<HTMLProps<HTMLAnchorElement>> = ({
  children,
  href,
  target,
}) => (
  <a className="focus-underline" href={href} target={target}>
    <Typography as="span" type="h4">
      {children}
    </Typography>
    {target === '_blank' && <span className="sr-only">opens in new tab</span>}
  </a>
);

const Navigation: FC<NavigationProps> = ({ children, className, label }) => (
  <nav
    className={cn(
      'flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8',
      className
    )}
    aria-label={label}
  >
    {children}
  </nav>
);

export default Navigation;
