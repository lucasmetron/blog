'use client';

import React from 'react';
import { Trash } from 'lucide-react';

interface BtnDeletePostProps {
  idPost: string;
}

const BtnDeletePost = ({ idPost }: BtnDeletePostProps) => {
  return (
    <Trash
      className='cursor-pointer text-red-500 transition hover:scale-120 hover:text-red-700'
      onClick={() => {
        console.log('deletar ', idPost);
      }}
    />
  );
};

export default BtnDeletePost;
