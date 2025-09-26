'use client';

import clsx from 'clsx';
import React from 'react';

type VariantProps = 'default' | 'ghost' | 'danger';
type SizeProps = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: VariantProps;
  size?: SizeProps;
} & React.ComponentProps<'button'>;

const Button = ({ variant = 'default', size = 'md', ...rest }: ButtonProps) => {
  const variantStyles: Record<VariantProps, string> = {
    default: clsx('bg-blue-500 text-blue-100'),
    ghost: clsx('bg-slate-200 text-slate-900'),
    danger: clsx('bg-red-600 text-red-100'),
  };

  const syzeStyle: Record<SizeProps, string> = {
    sm: clsx('text-sm/tight py-1 px-2 [$_svg]:w-3 [&_svg]:h-3'),
    md: clsx('test-base/tight py-2 px-4 [$_svg]:w-4 [&_svg]:h-4'),
    lg: clsx('text-lg/tight py-4 px-6 [$_svg]:w-5 [&_svg]:h-5'),
  };

  const classesButton = clsx(
    variantStyles[variant],
    syzeStyle[size],
    clsx(
      'cursor-pointer',
      'rounded-md',
      'flex items-center justify-center gap-1 text-center',
      'font-semibold',
      'transition ease-in',
      'hover:opacity-80',
      'disabled:cursor-not-allowed',
      'disabled:opacity-40',
    ),
    rest.className,
  );

  return <button {...rest} className={classesButton} />;
};

export default Button;
