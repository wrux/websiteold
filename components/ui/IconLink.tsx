import React, { FC, MouseEventHandler } from 'react';
import Link, { LinkProps } from 'next/link';
import * as HeroIcons from '@heroicons/react/outline';
import cn from 'clsx';

type IconName = keyof typeof HeroIcons;

interface IconLinkProps extends Pick<LinkProps, 'href'> {
  as?: 'button' | 'Link';
  dark?: boolean;
  className?: string;
  icon: IconName;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconLink: FC<IconLinkProps> = ({
  as = 'Link',
  children,
  className,
  dark = false,
  href,
  icon,
  onClick,
}) => {
  const SingleIcon = HeroIcons?.[icon];
  const wrapperClasses = cn(
    'inline-flex group items-center',
    dark ? 'text-white' : 'text-black',
    'hover:text-red-500 focus:text-red-500',
    className
  );
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
