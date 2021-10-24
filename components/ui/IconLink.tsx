import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import * as HeroIcons from '@heroicons/react/outline';
import cn from 'clsx';

type IconName = keyof typeof HeroIcons;

interface IconLinkProps {
  as?: 'button' | 'Link';
  className?: string;
  href?: string | null;
  icon: IconName;
  onClick?: CallableFunction | null;
}

const IconLink: FC<IconLinkProps> = ({
  as = 'Link',
  children,
  className,
  href,
  icon,
  onClick,
}) => {
  const SingleIcon = HeroIcons?.[icon];
  const wrapperClasses = cn('inline-flex group items-center', className);
  const markup = (
    <>
      {icon && (
        <span className="w-6 h-6 overflow-hidden mr-1" aria-hidden>
          <SingleIcon className="w-6 h-6 group-hover:-mt-6 transition-all" />
          <HeroIcons.ArrowRightIcon className="w-6 h-6" />
        </span>
      )}
      <span className="text-lg">{children}</span>
    </>
  );
  if (as === 'Link') {
    return (
      <Link href={href}>
        <a className={wrapperClasses}>{markup}</a>
      </Link>
    );
  }
  const Tag = as;
  return (
    <Tag className={wrapperClasses} onClick={onClick}>
      {markup}
    </Tag>
  );
};

export default IconLink;
