import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post tal novo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
