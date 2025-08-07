import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
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
    </header>
  );
};

export default Header;
