import clsx from 'clsx';
import { CirclePlus, Home, List } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const MenuAdmin = () => {
  const classNav = clsx(
    'bg-slate-900',
    'w-full',
    'rounded-lg',
    'py-3',
    'px-4',
    'flex',
    'gap-4',
    'flex-wrap',
    'dark:bg-slate-100',
  );
  const linkNav = clsx(
    'flex',
    'gap-2',
    'text-white',
    '[&>svg]:w-4.5',
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
        Posts
      </Link>

      <Link className={linkNav} href='/admin/post/new'>
        <CirclePlus />
        Adicionar Post
      </Link>
    </nav>
  );
};

export default MenuAdmin;
