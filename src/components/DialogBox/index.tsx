'use client';

import React from 'react';
import clsx from 'clsx';

interface DialogBoxProps {
  title: string;
  description: string;
  textCancelBtn?: string;
  textOkBtn?: string;
}

const DialogBox = ({
  title,
  description,
  textCancelBtn = 'Cancelar',
  textOkBtn = 'Ok',
}: DialogBoxProps) => {
  return (
    <div
      className={clsx(
        'bg-black/50 backdrop-blur-xs fixed top-0 bottom-0 left-0 right-0 z-50',
        'flex items-center justify-center',
      )}
    >
      <div
        className={clsx(
          'bg-slate-100 p-6 rounded-lg max-w-2xl mx-6',
          'flex flex-col gap-6',
          'shadow-lg shadow-black/30 text-center',
        )}
      >
        <h3 className='text-xl font-extrabold'>{title}</h3>
        <p>{description}</p>
        <div className='flex items-center justify-around'>
          <button className='bg-slate-300 transition-all px-4 py-2 rounded-lg hover:bg-slate-400 cursor-pointer'>
            {textCancelBtn}
          </button>
          <button className='bg-blue-500 transition-all px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer text-white'>
            {textOkBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
