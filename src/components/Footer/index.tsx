import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex items-center justify-center pt-5'>
      <p className='text-[0.8rem]'>
        Copyright &copy; {new Date().getFullYear()} -{' '}
        <Link href={'/'}>The Blog</Link>
      </p>
    </footer>
  );
};

export default Footer;
