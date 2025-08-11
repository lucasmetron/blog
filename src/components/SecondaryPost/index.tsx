import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

import { PostType } from '@/Types/PostType';
import ImagePost from '../ImagePost';
import DescribePost from '../DescribePost';

interface SecondaryPostsType {
  posts: PostType[];
}

const SecondaryPosts = ({ posts }: SecondaryPostsType) => {
  return (
    <div
      className={clsx(
        'w-full',
        'h-fit',
        'grid',
        'grid-cols-[1fr]',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
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

          <DescribePost post={post} typeTile='h2' />
        </Link>
      ))}
    </div>
  );
};

export default SecondaryPosts;
