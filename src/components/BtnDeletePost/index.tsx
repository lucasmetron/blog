'use client';

import React, { useTransition, useState } from 'react';
import { Trash } from 'lucide-react';
import { deletePostAction } from '@/actions/post/delete-post-action';
import clsx from 'clsx';
import DialogBox from '../DialogBox';
import { notify } from '@/utils/functions';

interface BtnDeletePostProps {
  idPost: string;
  title: string;
}

const BtnDeletePost = ({ idPost, title }: BtnDeletePostProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [isPending, setTransition] = useTransition();

  function handleClick() {
    setDialogIsOpen(true);
  }

  function handleCancel() {
    setDialogIsOpen(false);
  }

  function handleConfirm() {
    setTransition(async () => {
      const result = await deletePostAction(idPost);
      setDialogIsOpen(false);

      if (result.error === '') {
        notify('Post excluído com sucesso!', 'success');
      } else {
        notify(result.error, 'error');
      }
    });
  }

  return (
    <>
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

      {dialogIsOpen && (
        <DialogBox
          diseabled={isPending}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          isVisible={dialogIsOpen}
          title={'Tela de confirmação'}
          content={`Deseja realmente excluir o post: "${title}"?  `}
        />
      )}
    </>
  );
};

export default BtnDeletePost;
