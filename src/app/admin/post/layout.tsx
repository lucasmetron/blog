import MenuAdmin from '@/components/MenuAdmin';

export default function AdminPostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
