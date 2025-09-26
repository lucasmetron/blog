'use client';

import React from 'react';
import clsx from 'clsx';
import Button from '../Button';

interface DialogBoxProps {
  title: string;
  content: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  isVisible?: boolean;
  textCancelBtn?: string;
  textOkBtn?: string;
  diseabled?: boolean;
}

const DialogBox = ({
  title,
  content,
  isVisible = false,
  onConfirm = () => {},
  onCancel = () => {},
  textCancelBtn = 'Cancelar',
  textOkBtn = 'Ok',
  diseabled = false,
}: DialogBoxProps) => {
  if (!isVisible) return null;

  function handleCancel() {
    if (diseabled) return;
    onCancel();
  }

  return (
    <div
      className={clsx(
        'bg-black/50 backdrop-blur-xs fixed top-0 bottom-0 left-0 right-0 z-50',
        'flex items-center justify-center',
      )}
      onClick={handleCancel}
    >
      <div
        className={clsx(
          'bg-slate-100 p-6 rounded-lg max-w-2xl mx-6 dark:bg-slate-800',
          'flex flex-col gap-6',
          'shadow-lg shadow-black/30 text-center',
        )}
        onClick={e => e.stopPropagation()}
      >
        <h3 className='text-xl font-extrabold'>{title}</h3>
        <div>{content}</div>
        <div className='flex items-center justify-around gap-3'>
          <Button
            className='w-full'
            variant='ghost'
            disabled={diseabled}
            onClick={onCancel}
          >
            {textCancelBtn}
          </Button>
          <Button
            variant='default'
            className='w-full'
            disabled={diseabled}
            onClick={onConfirm}
          >
            {textOkBtn}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
