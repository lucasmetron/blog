import type { Metadata } from 'next';
import './globals.css';
import ButtonDarkMode from '@/components/ButtonDarkMode';
import { ThemeProvider } from '@/context/themeContext';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog developed with Next 15',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={clsx(
          'text-slate-900',
          'bg-slate-100',
          'dark:text-slate-100',
          'dark:bg-slate-900',
        )}
      >
        <ThemeProvider>
          <ButtonDarkMode />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
