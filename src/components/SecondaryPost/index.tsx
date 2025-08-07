import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { PostType } from '@/Types/PostType';
import { formatDate } from '@/utils/functions';

interface SecondaryPostType {
  posts: PostType[];
}

const SecondaryPost = ({ posts }: SecondaryPostType) => {
  return (
    <div className='w-[100%] h-fit grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] gap-[1.5rem]'>
      {posts.map(post => (
        <Link
          href={`/post/${post.slug}`}
          key={post.id}
          className='w-[100%] flex flex-col gap-1 cursor-pointer group'
        >
          <div className='relative rounded-[12px] overflow-hidden'>
            <Image
              src={post.coverImageUrl}
              alt={post.slug}
              width={1000}
              height={1000}
              className='object-fill w-[100%] group-hover:scale-105 transition'
            />
          </div>

          <p>{formatDate(post.createdAt)}</p>
          <h2 className='font-bold text-xl'>{post.title}</h2>
          <p className='opacity-90'>{post.excerpt}</p>
        </Link>
      ))}
    </div>
  );
};

export default SecondaryPost;
