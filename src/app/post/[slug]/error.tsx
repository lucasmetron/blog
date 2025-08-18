'use client';

import React, { useEffect } from 'react';
import ErrorMessage from '@/components/ErrorMessage';

type ErrorProps = {
  error: Error; //mostra o que aconteceu no erro como mensagens e etc
  reset: () => void; //função que vai forçar a pagina a tentar fazer o que deu erro novamente.
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.log('error', error);
  }, []);
  return (
    <ErrorMessage
      title='Post não econtrado'
      contentTitle={error.message || 'Algum erro aconteceu'}
      content={<button onClick={reset}>Tentar novamente</button>}
    />
  );
};

export default Error;
