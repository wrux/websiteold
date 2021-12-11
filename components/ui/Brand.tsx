import React, { FC } from 'react';
import Link from 'next/link';
import cn from 'clsx';

interface BrandProps {
  dark?: boolean;
  to?: string | undefined;
}

const Brand: FC<BrandProps> = ({ dark = false, to }) => {
  const markup = (
    <span className={cn('text-xl font-bold tracking-wide')}>wrux</span>
  );
  if (to) {
    return (
      <Link href={to}>
        <a
          className={cn(
            'hover:underline focus:underline underline-offset-4',
            dark ? 'text-white' : 'text-black'
          )}
        >
          {markup}
        </a>
      </Link>
    );
  }
  return markup;
};

export default Brand;
