import React, { Attributes, FC, HTMLProps } from 'react';

interface NavigationProps {
  label: string;
}

export const NavigationItem: FC<HTMLProps<HTMLAnchorElement>> = ({
  children,
  href,
  target,
}) => (
  <a key={href} href={href}>
    {children}
    {target === '_blank' && <span className="sr-only">opens in new tab</span>}
  </a>
);

const Navigation: FC<NavigationProps> = ({ children, label }) => (
  <section>
    <div className="container">
      <nav aria-label={label}>{children}</nav>
    </div>
  </section>
);

export default Navigation;
