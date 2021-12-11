import React, { FC } from 'react';
import cn from 'clsx';
import { LoadingIndicator } from '.';

type HTMLButtonProps = JSX.IntrinsicElements['button'];

interface ButtonProps extends HTMLButtonProps {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  isLoading = false,
  ...props
}) => (
  <button
    {...props}
    className={cn(
      'relative',
      'h-11 py-2 px-6 min-w-[12rem] rounded-md bg-black border-2',
      className
    )}
  >
    {isLoading ? (
      <LoadingIndicator className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 text-sm" />
    ) : (
      children
    )}
  </button>
);

export default Button;
