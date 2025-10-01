'use client';

import React from 'react';
import InputText from '../InputText';
import Button from '../Button';
import InputCheckBox from '../InputCheckBox';
import InputMarkdown from '@/components/InputMarkdown';
import ImageUploader from '../ImageUploader';

const ManagePostFrom = () => {
  const [content, setContent] = React.useState('');

  return (
    <form action='' className='mb-16'>
      <div className='flex flex-col gap-4 items-center '>
        <ImageUploader />
        <InputMarkdown
          value={content}
          setValue={setContent}
          disabled={false}
          textAreaName='content'
          labelText='Contéudo'
        />

        <InputText labelText='Nome' placeholder='Digite SEU NOME' />

        <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />

        <InputText
          readOnly
          labelText='Sobrenome sasas'
          placeholder='Digite seu sobrenome'
        />

        <InputText
          defaultValue='a'
          disabled
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
        />

        <InputText
          disabled
          labelText='Sobrenome'
          placeholder='Digite seu sobrenome'
        />

        <InputText placeholder='Digite seu sobrenome' />

        <InputCheckBox labelText='teste' />

        <div className='mt-4 w-full'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
};

export default ManagePostFrom;
