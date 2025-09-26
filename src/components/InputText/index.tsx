import clsx from 'clsx';
import React, { useId } from 'react';

type InputTextProps = { labelText?: string } & React.ComponentProps<'input'>;

const InputText = ({ labelText = '', ...rest }: InputTextProps) => {
  const id = useId();

  return (
    <div className='w-full flex flex-col gap-1'>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        {...rest}
        id={id}
        className={clsx(
          'bg-white outline-0 text-base/tight',
          'ring-0 focus:ring-2 focus:ring-blue-500',
          'p-2 rounded',
          'border border-gray-300',
          'transition-all duration-200 ease-in-out',
          'placeholder:text-gray-400',
          'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70',
          'read-only:bg-slate-200 read-only:cursor-not-allowed read-only:opacity-70',
        )}
      />
    </div>
  );
};

export default InputText;
