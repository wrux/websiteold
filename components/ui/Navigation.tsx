import React, { FC, HTMLProps } from 'react';
import cn from 'clsx';

interface NavigationProps {
  className?: string;
  label: string;
}

export const NavigationItem: FC<HTMLProps<HTMLAnchorElement>> = ({
  children,
  href,
  target,
}) => (
  <a
    className="text-lg md:text-2xl font-semibold hover:underline focus:underline underline-offset-4"
    href={href}
    target={target}
  >
    {children}
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
