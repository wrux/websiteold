import React, { FC } from 'react';
import Link from 'next/link';
import cn from 'clsx';

interface BrandProps {
  dark?: boolean;
  to?: string | undefined;
}

const Brand: FC<BrandProps> = ({ dark = false, to }) => {
  const markup = (
    <span
      className={cn(
        'text-xl font-bold tracking-wide',
        dark ? 'text-white' : 'text-black'
      )}
    >
      wrux
    </span>
  );
  if (to) {
    return (
      <Link href={to}>
        <a>{markup}</a>
      </Link>
    );
  }
  return markup;
};

export default Brand;
