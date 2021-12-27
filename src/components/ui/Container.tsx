import React, { FC } from 'react';
import cn from 'clsx';

interface ContainerProps {
  as?: HTMLElementTagNameMap;
  className?: string;
}

// @TODO: Refactor the `as` prop to work properly with Typescript.
const Container: FC<ContainerProps> = ({ as = 'div', children, className }) => {
  const Tag = as;
  return <Tag className={cn('container px-8', className)}>{children}</Tag>;
};

export default Container;
