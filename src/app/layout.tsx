import type { Metadata } from 'next';

import './globals.css';
import ButtonDarkMode from '@/components/ButtonDarkMode';
import { ThemeProvider } from '@/context/themeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

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
            <Header />
            {children}
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
