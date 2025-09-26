import Button from '@/components/Button';
import { Bug } from 'lucide-react';
import React from 'react';

export const dynamic = 'force-dynamic';

const NewPostPage = () => {
  return (
    <div className='flex gap-4 items-center bg-amber-200'>
      <Button variant='default' size='sm'>
        <Bug /> default
      </Button>
      <Button variant='ghost' size='md'>
        <Bug /> ghost
      </Button>
      <Button variant='danger' size='lg' className='w-full'>
        <Bug /> danger
      </Button>
    </div>
  );
};

export default NewPostPage;
