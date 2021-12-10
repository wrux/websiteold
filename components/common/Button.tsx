import React, { FC } from 'react';
import cn from 'clsx';

const Button: FC<JSX.IntrinsicElements['button']> = ({
  className,
  ...props
}) => (
  <button
    {...props}
    className={cn('py-2 px-6 rounded-md bg-red-500', className)}
  />
);

export default Button;
