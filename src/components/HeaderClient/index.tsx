'use client';

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { canShowHeaderAndFooter } from '@/utils/functions';

const HeaderClient = () => {
  const pathname = usePathname(); // pega o path atual

  return canShowHeaderAndFooter(pathname) ? (
    <header>
      <Link href={'/'}>
        <h1
          className={clsx(
            'font-extrabold text-4xl',
            'sm:text-5xl',
            'md:text-6xl',
          )}
        >
          The Blog
        </h1>
      </Link>
      <Link href={'/admin/post'}>
        <p>ADMIN teste</p>
      </Link>
    </header>
  ) : (
    <></>
  );
};

export default HeaderClient;
