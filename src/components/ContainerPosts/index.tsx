import clsx from 'clsx';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerPosts = ({ children }: ContainerProps) => {
  return (
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
  );
};

export default ContainerPosts;
