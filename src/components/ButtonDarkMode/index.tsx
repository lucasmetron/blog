'use client';

import React, { useLayoutEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ButtonDarkMode = () => {
  const [isDark, setIsDark] = useState(true);

  function toogleDarkMode() {
    const html = document.documentElement;

    if (isDark) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }

    setIsDark(state => !state);
    localStorage.setItem('isDark', JSON.stringify(!isDark));
  }

  useLayoutEffect(() => {
    const isDark: boolean = JSON.parse(
      localStorage.getItem('isDark') || 'false',
    );
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      setIsDark(true);
    } else {
      html.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  return (
    <button
      title='Muda tema'
      className='fixed right-5 top-5'
      onClick={toogleDarkMode}
    >
      {isDark ? (
        <Sun className='cursor-pointer' color='#f1f5f9' />
      ) : (
        <Moon className='cursor-pointer' />
      )}
    </button>
  );
};

export default ButtonDarkMode;
