import Link from 'next/link';
import React from 'react';

import { PostType } from '@/Types/PostType';
import { cutString, formatDate } from '@/utils/functions';
import clsx from 'clsx';
import PostHeading from '../PostHeading';
import ImagePost from '../ImagePost';

interface SecondaryPostType {
  posts: PostType[];
}

const SecondaryPost = ({ posts }: SecondaryPostType) => {
  return (
    <div
      className={clsx(
        'w-full',
        'h-fit',
        'grid',
        'grid-cols-[1fr]',
        'sm:grid-cols-[1fr_1fr_1fr]',
        'gap-[1.5rem]',
      )}
    >
      {posts.map(post => (
        <Link
          href={`/post/${post.slug}`}
          key={post.id}
          className='w-full h-full grid grid-rows-[auto_1fr] gap-[1rem] cursor-pointer group'
        >
          <ImagePost post={post} />

          <div className='w-full h-full flex flex-col'>
            <p className='opacity-70'>{formatDate(post.createdAt)}</p>
            <PostHeading>{cutString(post.title, 50)}</PostHeading>
            <p>{cutString(post.excerpt, 150)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SecondaryPost;
