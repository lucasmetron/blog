import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <Link href={'/'}>
      <header>
        <h1 className={`font-bold text-6xl `}>The Blog</h1>
      </header>
    </Link>
  );
};

export default Header;
