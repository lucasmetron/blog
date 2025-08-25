import { revalidateExampleAction } from '@/actions/revalidate-example';
import { formatDate } from '@/utils/functions';
import React from 'react';

// export const dynamic = 'force-static';
// export const revalidate = 10;

const exemplo = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const stamp = new Date().toISOString();

  return (
    <div>
      Tempo:{formatDate(stamp)} - ID:{id}
      <form action={revalidateExampleAction}>
        <input type='hidden' defaultValue={`example/${id}`} name='path' />

        <button
          type='submit'
          className='mt-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        >
          Revalidate Now
        </button>
      </form>
    </div>
  );
};

export default exemplo;
