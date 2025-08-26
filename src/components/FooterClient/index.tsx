'use client';

import Link from 'next/link';
import React from 'react';

import { canShowHeaderAndFooter } from '@/utils/functions';
import { usePathname } from 'next/navigation';

const FooterClient = () => {
  const path = usePathname();

  return canShowHeaderAndFooter(path) ? (
    <footer className='flex items-center justify-center pt-5'>
      <p className='text-[0.8rem]'>
        Copyright &copy; {new Date().getFullYear()} -{' '}
        <Link href={'/'}>The Blog</Link>
      </p>
    </footer>
  ) : (
    <></>
  );
};

export default FooterClient;
