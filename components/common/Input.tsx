import React, { FC } from 'react';
import cn from 'clsx';

type HTMLInputProps = JSX.IntrinsicElements['input'];

interface InputProps extends HTMLInputProps {
  hasError?: boolean;
}

const Input: FC<InputProps> = ({ className, hasError = false, ...props }) => (
  <input
    {...props}
    className={cn(
      'w-full text-black',
      'py-1.5 px-3 rounded-sm',
      'focus:outline-none focus:ring-2 ring-offset-4 ring-offset-black',
      hasError ? 'bg-red-200 ring-red-200' : 'bg-white ring-white',
      className
    )}
  />
);

export default Input;
