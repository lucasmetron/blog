import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { findAllPostsAdmin } from '@/lib/posts/queries/admin';
import BtnDeletePost from '../BtnDeletePost';

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
        <div
          className={clsx(
            'w-full',
            'py-2',
            'px-2',
            'flex',
            'items-center',
            'justify-between',
            'rounded-[3px]',
            !post.published && 'bg-gray-300',
          )}
          key={post.id}
        >
          <Link className='cursor-pointer' href={`/admin/post/${post.id}`}>
            <p className='text-gray-900 text-sm md:text-lg'>{post.title}</p>
          </Link>

          {!post.published && (
            <p className=' text-xs italic font-thin md:text-sm'>{`(Não publicado)`}</p>
          )}
          <BtnDeletePost idPost={post.id} title={post.title} />
        </div>
      ))}
    </div>
  );
};

export default PostListAdmin;
