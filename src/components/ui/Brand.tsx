import React, { FC } from 'react';
import Link from 'next/link';

interface BrandProps {
  to?: string | undefined;
}

const Brand: FC<BrandProps> = ({ to }) => {
  const markup = <span className="text-xl font-bold tracking-wide">wrux</span>;
  if (to) {
    return (
      <Link href={to}>
        <a className="hover:underline focus-visible:outline-none focus:underline underline-offset-4">
          {markup}
        </a>
      </Link>
    );
  }
  return markup;
};

export default Brand;
