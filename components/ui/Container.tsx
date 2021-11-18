import React, { FC } from 'react';
import cn from 'clsx';

interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cn('container px-8', className)}>{children}</div>
);

export default Container;
