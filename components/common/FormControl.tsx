import React, { memo } from 'react';
import { FormControlProps } from '@formium/react';
import { Error, Small } from '@/components/common';

const FormControl = memo<FormControlProps>(function FormControl({
  children,
  description,
  error,
  label,
  labelFor,
}) {
  return (
    <div className="grid grid-cols-12">
      {label && (
        <label className="col-span-4 mt-1.5" htmlFor={labelFor}>
          {label}
        </label>
      )}
      <div className="col-span-8">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { hasError: error });
          }
          return child;
        })}
        {description && <Small className="block mt-2">{description}</Small>}
        {error && <Error className="mt-2">{error}</Error>}
      </div>
    </div>
  );
});

export default FormControl;
