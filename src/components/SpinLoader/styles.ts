import clsx from 'clsx';

export const container = clsx('flex', 'items-center', 'justify-center');

export const spinner = clsx(
  'w-10',
  'h-10',
  'border-5',
  'border-slate-900',
  'dark:border-slate-100',
  'border-t-transparent',
  'dark:border-t-slate-900',
  'rounded-full',
  'animate-spin',
);
