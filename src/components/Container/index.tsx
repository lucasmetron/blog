import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'w-full min-h-screen flex items-start justify-center',
        'text-slate-900',
        'bg-slate-100',
        'dark:text-slate-100',
        'dark:bg-slate-900',
      )}
    >
      <div
        className={clsx(
          'w-[80vw]',
          'max-[900px]:w-[90vw]',
          'pt-[3rem]',
          'pb-[1rem]',
          'flex',
          'flex-col',
          'gap-[1rem]',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
