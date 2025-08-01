import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerPosts = ({ children }: ContainerProps) => {
  return (
    <div className='w-[80vw] max-[900px]:w-[90vw] pt-[3rem] pb-[3rem] flex flex-col gap-[1rem] @'>
      {children}
    </div>
  );
};

export default ContainerPosts;
