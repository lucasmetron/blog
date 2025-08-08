import React from 'react';

type PostHeadingType = {
  children: React.ReactNode;
  as?: 'h1' | 'h2';
};

const PostHeading = ({ children, as: Tag = 'h2' }: PostHeadingType) => {
  const style = {
    h1: 'font-bold text-3xl',
    h2: 'font-bold text-xl',
  };

  return <Tag className={style[Tag]}>{children}</Tag>;
};

export default PostHeading;
