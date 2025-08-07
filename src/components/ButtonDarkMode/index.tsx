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
      className='fixed right-5 top-5 z-1 bg-slate-900 dark:bg-slate-100 rounded-2xl p-1 '
      onClick={toogleDarkMode}
    >
      {isDark ? (
        <Sun className='cursor-pointer text-slate-900' />
      ) : (
        <Moon className='cursor-pointer text-slate-100' />
      )}
    </button>
  );
};

export default ButtonDarkMode;
