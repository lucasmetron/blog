import SpinLoader from '@/components/SpinLoader';
import clsx from 'clsx';
import React from 'react';

const LoadingPost = () => {
  return (
    <div
      className={clsx(
        'w-full',
        'h-[75vh]',
        'flex',
        'justify-center',
        'items-center',
      )}
    >
      <SpinLoader textLoad='Carregando post' />
    </div>
  );
};

export default LoadingPost;
