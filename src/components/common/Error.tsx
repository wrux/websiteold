import React, { FC } from 'react';
import cn from 'clsx';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

interface ErrorProps {
  className?: string;
  role?: string;
}

const Error: FC<ErrorProps> = ({
  children,
  className,
  role = 'alert',
  ...props
}) => (
  <div
    {...props}
    role={role}
    className={cn('flex flex-column items-baseline space-x-2', className)}
  >
    <ExclamationCircleIcon
      className="h-5 w-5 translate-y-1 text-red-500"
      aria-hidden
    />
    <div>{children}</div>
  </div>
);

export default Error;
