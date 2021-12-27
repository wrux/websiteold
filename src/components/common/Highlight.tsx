import React, { FC } from 'react';
import cn from 'clsx';

interface HighlightProps {
  color?: 'red' | 'green' | 'blue';
}

const Highlight: FC<HighlightProps> = ({ children, color = 'red' }) => (
  <strong
    className={cn('bolder', {
      'text-red-500': color === 'red',
      'text-green-500': color === 'green',
      'text-blue-500': color === 'blue',
    })}
  >
    {children}
  </strong>
);

export default Highlight;
