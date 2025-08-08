import SpinLoader from '@/components/SpinLoader';
import clsx from 'clsx';
import React from 'react';

const LoadingRoot = () => {
  return (
    <div
      className={clsx(
        'w-full',

        'flex',
        'justify-center',
        'items-center',
      )}
    >
      <SpinLoader textLoad='Loading geral' />
    </div>
  );
};

export default LoadingRoot;
