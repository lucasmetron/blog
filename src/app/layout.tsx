import type { Metadata } from 'next';

import './globals.css';
import ButtonDarkMode from '@/components/ButtonDarkMode';
import { ThemeProvider } from '@/context/themeContext';
import HeaderClient from '@/components/HeaderClient';
import FooterClient from '@/components/FooterClient';
import Container from '@/components/Container';
import ScrollTopUseClient from '@/components/ScrollTopUseClient';
import Toastify from '@/components/Toastify';

export const metadata: Metadata = {
  title: {
    default: 'The Blog | Next 15',
    template: '%s | The Blog',
  },
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
          <Container>
            <HeaderClient />
            <ScrollTopUseClient />
            {children}
            <FooterClient />
            <Toastify />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
