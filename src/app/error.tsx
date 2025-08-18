'use client';

import React, { useEffect } from 'react';
import ErrorMessage from '@/components/ErrorMessage';

type ErrorProps = {
  error: Error; //mostra o que aconteceu no erro como mensagens e etc
  reset: () => void; //função que vai forçar a pagina a tentar fazer o que deu erro novamente.
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.warn('error', error);
  }, []);
  return (
    <ErrorMessage
      title='Erro geral'
      contentTitle={error.message || 'Algum erro aconteceu'}
      content={<button onClick={reset}>Tentar novamente</button>}
    />
  );
};

export default Error;
