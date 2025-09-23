import { Frown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type ErrorMessageProps = {
  contentTitle: string;
  content: React.ReactNode;
  title?: string;
  redirectTo?: string;
};

const ErrorMessage = ({
  content,
  contentTitle,
  title = '',
  redirectTo = '/',
}: ErrorMessageProps) => {
  return (
    <>
      {title !== '' && <title>{title}</title>}
      <Link
        href={redirectTo}
        className={`w-full h-[50vh] flex justify-center items-center flex-col gap-1`}
      >
        <h1 className='flex items-center justify-center gap-1 font-extrabold text-3xl'>
          {contentTitle} <Frown size={35} />
        </h1>
        {content}
      </Link>
    </>
  );
};

export default ErrorMessage;
