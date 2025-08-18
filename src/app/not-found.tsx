import ErrorMessage from '@/components/ErrorMessage';
import { Frown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFoundPAge = () => {
  return (
    <ErrorMessage
      title='Página não encontrada'
      contentTitle='Error 401'
      content={'Página não econtrada, volte para a home.'}
    />
  );
};

export default NotFoundPAge;
