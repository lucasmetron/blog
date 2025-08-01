import { PostType } from '@/Types/PostType';
import Image from 'next/image';
import React from 'react';

interface MainPostType {
  post: PostType;
}

const MainPost = ({ post }: MainPostType) => {
  return (
    <div className='relative w-[100%] h-[30vh] grid grid-cols-[1fr_1fr] bg-amber-300 gap-[1.5rem]'>
      <div className='relative w-full h-full'>
        <Image
          src={post.coverImageUrl}
          alt={post.slug}
          fill
          className='object-fill rounded-[5px]'
          radioGroup='50'
        />
      </div>
      <div>
        <p>{post.createdAt}</p>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
};

export default MainPost;
