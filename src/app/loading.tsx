import SpinLoader from '@/components/SpinLoader';
import clsx from 'clsx';
import React from 'react';

const LoadingRoot = () => {
  return (
    <div
      className={clsx(
        'w-full',
        'min-h-screen',
        'flex',
        'justify-center',
        'items-center',
      )}
    >
      <SpinLoader />
    </div>
  );
};

export default LoadingRoot;
