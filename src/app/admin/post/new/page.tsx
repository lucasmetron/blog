import Button from '@/components/Button';
import InputCheckBox from '@/components/InputCheckBox';
import InputText from '@/components/InputText';
import React from 'react';

export const dynamic = 'force-dynamic';

const NewPostPage = () => {
  return (
    <form action='' className='mb-16'>
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

        <InputText placeholder='Digite seu sobrenome' />

        <InputCheckBox labelText='teste' />

        <div className='mt-4 w-full'>
          <Button type='submit'>Enviar</Button>
        </div>
      </div>
    </form>
  );
};

export default NewPostPage;
