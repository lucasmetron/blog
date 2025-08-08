import { Suspense } from 'react';

import Posts from '@/components/Posts';
import SpinLoader from '@/components/SpinLoader';
import clsx from 'clsx';

export default function Home() {
  return (
    <div
      className={clsx(
        'w-full',
        'min-h-screen',
        'flex',
        'justify-center',
        'flex-col',
      )}
    >
      <Suspense fallback={<SpinLoader textLoad='Carregando posts' />}>
        <Posts />
      </Suspense>
    </div>
  );
}
