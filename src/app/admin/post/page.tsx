import React, { Suspense } from 'react';
import { Metadata } from 'next';

import PostListAdmin from '@/components/PostListAdmin';
import SpinLoader from '@/components/SpinLoader';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Post Admin',
};

const ListPostsAdminPage = async () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className='p-10'>
            <SpinLoader textLoad='Carregando todos posts' />
          </div>
        }
      >
        <PostListAdmin />
      </Suspense>
    </div>
  );
};

export default ListPostsAdminPage;
