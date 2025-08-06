'use client';

import React, { createContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
  isDark: boolean;
  toogleTheme(): void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDark: false,
  toogleTheme: () => {},
});

interface ContextProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ContextProps) {
  const [isDark, setIsDark] = useState(true);

  function toogleTheme() {
    setIsDark(state => !state);
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toogleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
