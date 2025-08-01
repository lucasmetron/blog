import { colors } from '@/styles/pallete';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex items-center justify-center'>
      <p style={{ color: colors.textRegular }} className='text-[0.8rem]'>
        Copyright The Blog Owner 2025
      </p>
    </footer>
  );
};

export default Footer;
