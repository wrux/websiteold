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
            dark ? 'text-white' : 'text-black',
            'hover:underline focus:underline hover:text-red-500 focus:text-red-500'
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
