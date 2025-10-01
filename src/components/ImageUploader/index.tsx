'use client';

import React, { useRef, useState } from 'react';
import Button from '../Button';
import { ImageUpIcon } from 'lucide-react';
import { MAX_SIZE_IMG } from '@/lib/constants';
import { notify } from '@/utils/functions';

const ImageUploader = () => {
  const [nameFile, setNameFile] = useState<string | null>(null);
  const inputImg = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    if (inputImg.current) {
      inputImg.current.click();
    }
  }

  function handleChange() {
    if (inputImg.current) {
      const file = inputImg?.current?.files?.[0];
      setNameFile(file?.name || '');
      console.log('✌️file --->', file);

      if (file?.size && file?.size > MAX_SIZE_IMG) {
        setNameFile('');
        notify('Imagem muito grande. O tamanho máximo é 900kb.', 'error');
        inputImg.current.value = '';
        return;
      }

      const formData = new FormData();
      formData.append('file', file as Blob);

      // TODO: enviar para o backend
      console.log('✌️formData --->', formData.get);
      inputImg.current.value = '';
    }
  }

  return (
    <div className='w-full flex flex-col gap-2 py-4'>
      <Button type='button' className=' flex self-start' onClick={handleClick}>
        <ImageUpIcon />
        Enviar imagem
        {nameFile && <p>{nameFile}</p>}
      </Button>
      <input
        onChange={handleChange}
        ref={inputImg}
        type='file'
        name='file'
        accept='image/*'
        className='hidden'
      />
    </div>
  );
};

export default ImageUploader;
