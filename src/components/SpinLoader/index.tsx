import React from 'react';
import { container, spinner } from './styles';

type SpinLoaderType = {
  className?: string;
};

const SpinLoader = ({ className }: SpinLoaderType) => {
  return (
    <div className={`${container} ${className}`}>
      <div className={spinner} />
    </div>
  );
};

export default SpinLoader;
