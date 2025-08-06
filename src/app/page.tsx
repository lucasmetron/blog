import { Suspense } from 'react';

import ContainerPosts from '@/components/ContainerPosts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
        'text-slate-900',
        'bg-slate-100',
        'dark:',
        'dark:text-slate-100',
        'dark:bg-slate-900',
      )}
    >
      <ContainerPosts>
        <Header />
        <Suspense fallback={<SpinLoader />}>
          <Posts />
        </Suspense>
        <Footer />
      </ContainerPosts>
    </div>
  );
}
