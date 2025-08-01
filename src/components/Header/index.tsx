import { colors } from '@/styles/pallete';
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1 style={{ color: colors.textBold }} className={`font-bold text-6xl `}>
        The Blog
      </h1>
    </header>
  );
};

export default Header;
