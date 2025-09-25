'use client';

import React from 'react';
import clsx from 'clsx';

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
        <div className='flex items-center justify-around'>
          <button
            disabled={diseabled}
            onClick={onCancel}
            className={clsx(
              'bg-slate-300',
              'dark:bg-slate-500',
              diseabled ? 'opacity-50' : 'opacity-100',
              'transition-all',
              'px-4',
              'py-2',
              'rounded-lg',
              'hover:bg-slate-400',
              diseabled ? 'cursor-not-allowed' : 'cursor-pointer',
            )}
          >
            {textCancelBtn}
          </button>
          <button
            disabled={diseabled}
            onClick={onConfirm}
            className={clsx(
              'bg-blue-500',
              diseabled ? 'opacity-50' : 'opacity-100',
              'transition-all',
              'px-4',
              'py-2',
              'rounded-lg',
              'hover:bg-blue-700',
              diseabled ? 'cursor-not-allowed' : 'cursor-pointer',
              'text-white',
            )}
          >
            {textOkBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
