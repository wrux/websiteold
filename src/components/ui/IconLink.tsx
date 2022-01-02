import React, { FC, MouseEventHandler } from 'react';
import Link, { LinkProps } from 'next/link';
import * as HeroIcons from '@heroicons/react/outline';
import cn from 'clsx';

type IconName = keyof typeof HeroIcons;

interface IconLinkProps extends Pick<LinkProps, 'href'> {
  as?: 'button' | 'Link';
  className?: string;
  icon: IconName;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
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
  const markup = (
    <>
      {icon && (
        <span className="w-6 h-6 overflow-hidden mr-1" aria-hidden>
          <SingleIcon className="w-6 h-6 group-hover:-mt-6 group-focus-visible:-mt-6 motion-safe:transition-all" />
          <HeroIcons.ArrowRightIcon className="w-6 h-6" />
        </span>
      )}
      <span className="text-lg">{children}</span>
    </>
  );
  if (as === 'Link') {
    return (
      <Link href={href}>
        <a
          className={cn(
            'inline-flex group items-center focus:underline focus:outline-none',
            className
          )}
        >
          {markup}
        </a>
      </Link>
    );
  }
  const Tag = as;
  return (
    <Tag
      className={cn(
        'inline-flex group items-center focus:underline focus:outline-none underline-offset-4',
        className
      )}
      onClick={onClick}
    >
      {markup}
    </Tag>
  );
};

export default IconLink;
