import React, { FC } from 'react';
import cn from 'clsx';

const Small: FC<JSX.IntrinsicElements['small']> = ({ className, ...props }) => (
  <small {...props} className={cn('text-sm font-light italic', className)} />
);

export default Small;
