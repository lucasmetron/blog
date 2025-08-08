import React from 'react';
import * as style from './styles';

type SpinLoaderType = {
  className?: string;
  textLoad?: string;
};

const SpinLoader = ({ className, textLoad }: SpinLoaderType) => {
  return (
    <div className={`${style.container} ${className}`}>
      <div className={style.spinner} />
      {textLoad && <p className={style.text}>{textLoad}</p>}
    </div>
  );
};

export default SpinLoader;
