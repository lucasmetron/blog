import type { Metadata } from 'next';
import './globals.css';
import ButtonDarkMode from '@/components/ButtonDarkMode';
import { ThemeProvider } from '@/context/themeContext';

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
      <body>
        <ThemeProvider>
          <ButtonDarkMode />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
