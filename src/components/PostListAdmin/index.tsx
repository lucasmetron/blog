import React from 'react';
import clsx from 'clsx';
import { Trash } from 'lucide-react';
import Link from 'next/link';

import { findAllPostsAdmin } from '@/lib/posts/queries/admin';

const PostListAdmin = async () => {
  const listPost = await findAllPostsAdmin();

  return (
    <div
      className={clsx(
        'w-full',
        'h-[70vh]',
        'pt-3',
        'overflow-auto',
        'flex',
        'flex-col',
        'items-center',
        'justify-start',
        'gap-3',
      )}
    >
      {listPost.map(post => (
        <Link
          href={`/admin/post/${post.id}`}
          key={post.id}
          className={clsx(
            'w-full',
            'py-2',
            'px-2',
            'flex',
            'items-center',
            'justify-between',
            'cursor-pointer',
            'rounded-[3px]',
            post.published ? 'bg-transparent' : 'bg-gray-300',
          )}
        >
          <p className='text-gray-900 text-md'>{post.title}</p>
          {!post.published && (
            <p className='text-sm italic font-thin'>{`(Não publicado)`}</p>
          )}

          <Trash color='red' />
        </Link>
      ))}
    </div>
  );
};

export default PostListAdmin;
