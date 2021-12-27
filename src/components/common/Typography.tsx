import React, { FC } from 'react';
import cn from 'clsx';

interface TypographyProps {
  as?: HTMLElementTagNameMap;
  className?: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'copy';
}

// @TODO: Refactor the `as` prop to work properly with Typescript.
const Typography: FC<TypographyProps> = ({
  as = 'p',
  className,
  type,
  ...props
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(className, {
        // Common styles.
        'tracking-tight font-bold': ['h1', 'h2'].includes(type),
        'font-semibold': ['h3', 'h4'].includes(type),
        // Heading styles.
        'text-5xl md:text-6xl lg:text-7xl xl:text-8xl': type === 'h1',
        'text-4xl lg:text-5xl': type === 'h2',
        'text-3xl': type === 'h3',
        'text-2xl': type === 'h4',
        // Misc.
        prose: type === 'copy',
      })}
      {...props}
    />
  );
};

export default Typography;
