import { PostType } from '@/Types/PostType';
import { formatDate } from '@/utils/functions';
import Image from 'next/image';
import React from 'react';

interface SecondaryPostType {
  posts: PostType[];
}

const SecondaryPost = ({ posts }: SecondaryPostType) => {
  return (
    <div className='w-[100%] h-fit grid grid-cols-[1fr_1fr_1fr] max-[800]:grid-cols-[1fr] gap-5'>
      {posts.map(post => (
        <div
          key={post.id}
          className='w-[100%] flex flex-col gap-1 cursor-pointer'
        >
          <div className='relative'>
            <Image
              src={post.coverImageUrl}
              alt={post.slug}
              width={1000}
              height={1000}
              className='object-fill rounded-[5px] w-[100%]'
            />
          </div>

          <p>{formatDate(post.createdAt)}</p>
          <h2 className='font-bold text-xl'>{post.title}</h2>
          <p className='opacity-90'>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default SecondaryPost;
