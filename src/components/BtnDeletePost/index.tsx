'use client';

import React, { useTransition } from 'react';
import { Trash } from 'lucide-react';
import { deletePostAction } from '@/actions/post/delete-post-action';
import clsx from 'clsx';

interface BtnDeletePostProps {
  idPost: string;
}

const BtnDeletePost = ({ idPost }: BtnDeletePostProps) => {
  const [isPending, setTransition] = useTransition();
  console.log('✌️isPending --->', isPending);

  function handleClick() {
    setTransition(async () => {
      const result = await deletePostAction(idPost);
      alert(`o result é ${result}`);
    });
  }
  return (
    <button disabled={isPending} onClick={handleClick}>
      <Trash
        className={clsx(
          !isPending ? 'cursor-pointer' : 'cursor-not-allowed',
          !isPending ? 'text-red-500' : 'text-gray-300',
          'transition',
          'hover:scale-120',
          !isPending ? 'hover:text-red-700' : 'text-gray-300',
        )}
      />
    </button>
  );
};

export default BtnDeletePost;
