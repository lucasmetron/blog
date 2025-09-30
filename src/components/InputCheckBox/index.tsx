import clsx from 'clsx';
import React, { useId } from 'react';

type InputCheckBoxProps = {
  labelText?: string;
  type?: 'checkbox';
} & React.ComponentProps<'input'>;

const InputCheckBox = ({
  labelText = '',
  type = 'checkbox',
  ...rest
}: InputCheckBoxProps) => {
  const id = useId();

  return (
    <div className='w-full flex items-center justify-start gap-3'>
      <input
        {...rest}
        id={id}
        type={type}
        className={clsx(
          'w-4 h-4 outline-0 rounded focus:ring-2 focus:ring-blue-500',
          rest.className,
        )}
      />

      {labelText && (
        <label htmlFor={id} className='text-base'>
          {labelText}
        </label>
      )}
    </div>
  );
};

export default InputCheckBox;
