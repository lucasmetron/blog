import SpinLoader from '@/components/SpinLoader';
import clsx from 'clsx';
import React from 'react';

const LoadingPostsAdmin = () => {
  return (
    <div className={clsx('w-full', 'flex', 'justify-center', 'items-center')}>
      <SpinLoader textLoad='Carregando posts' />
    </div>
  );
};

export default LoadingPostsAdmin;
