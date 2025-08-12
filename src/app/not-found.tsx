import { Frown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFoundPAge = () => {
  return (
    <Link
      href={'/'}
      className=' w-full h-[75vh] flex justify-center items-center flex-col gap-1'
    >
      <h1 className='flex gap-1 font-extrabold'>
        Error 401 <Frown />
      </h1>
      Página não econtrada, volte para a home.
    </Link>
  );
};

export default NotFoundPAge;
