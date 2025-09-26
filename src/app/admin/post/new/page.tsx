import InputText from '@/components/InputText';
import React from 'react';

export const dynamic = 'force-dynamic';

const NewPostPage = () => {
  return (
    <div className='flex flex-col gap-4 items-center '>
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
    </div>
  );
};

export default NewPostPage;
