import React from 'react';
import Image from 'next/image';

import { PostType } from '@/Types/PostType';

type ImagePostType = {
  post: PostType;
};

const ImagePost = ({ post }: ImagePostType) => {
  return (
    <div className='relative w-full h-full rounded-[12px] overflow-hidden'>
      <Image
        src={post.coverImageUrl}
        alt={post.slug}
        width={1200}
        height={700}
        className='object-cover object-center w-full h-full group-hover:scale-105 transition'
        priority
      />
    </div>
  );
};

export default ImagePost;
