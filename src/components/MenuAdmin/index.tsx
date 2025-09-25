import clsx from 'clsx';
import { Home, List } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const MenuAdmin = () => {
  const classNav = clsx(
    'w-full',
    'bg-slate-900',
    'rounded-md',
    'py-2',
    'px-4',
    'flex',
    'gap-4',
    'flex-wrap',
    'dark:bg-slate-100',
  );
  const linkNav = clsx(
    'gap-2',
    'text-white',
    'flex',
    '[&>svg]:w-5',
    'dark:text-slate-900',
  );
  return (
    <nav className={classNav}>
      <a className={linkNav} href='/' target='_blank'>
        <Home />
        Home
      </a>

      <Link className={linkNav} href='/admin/post'>
        <List />
        Products
      </Link>
    </nav>
  );
};

export default MenuAdmin;
