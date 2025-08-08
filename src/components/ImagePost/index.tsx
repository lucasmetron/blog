import React from 'react';
import Image from 'next/image';

import { PostType } from '@/Types/PostType';

type ImagePostType = {
  post: PostType;
  isPriority?: boolean;
  width?: number;
  height?: number;
};

const ImagePost = ({
  post,
  isPriority = false,
  width = 1200,
  height = 700,
}: ImagePostType) => {
  return (
    <div className='relative w-full h-full rounded-[12px] overflow-hidden'>
      <Image
        src={post.coverImageUrl}
        alt={post.slug}
        width={width}
        height={height}
        className='object-cover object-center w-full h-full group-hover:scale-105 transition'
        priority={isPriority}
      />
    </div>
  );
};

export default ImagePost;
