import React, { FC } from 'react';
import cn from 'clsx';

type HTMLTextareaProps = JSX.IntrinsicElements['textarea'];

interface TextAreaProps extends HTMLTextareaProps {
  hasError?: boolean;
  rows?: number;
}

const Textarea: FC<TextAreaProps> = ({
  className,
  hasError = false,
  ...props
}) => (
  <textarea
    {...props}
    className={cn(
      'w-full min-h-[8rem] text-black',
      'py-1.5 px-3 rounded-sm',
      'focus:outline-none focus:ring-2 ring-offset-4 ring-offset-black',
      hasError ? 'bg-red-200 ring-red-200' : 'bg-white ring-white',
      className
    )}
  />
);

export default Textarea;
