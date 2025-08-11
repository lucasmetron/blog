import React from 'react';
import PostHeading from '../PostHeading';
import { formatDate } from '@/utils/functions';
import { PostType } from '@/Types/PostType';

interface DescribePostProps {
  post: PostType;
  typeTile?: 'h1' | 'h2';
}

const DescribePost = ({ post, typeTile = 'h2' }: DescribePostProps) => {
  return (
    <div className='flex flex-col items-start justify-center gap-[0.5rem]'>
      <p className='opacity-70'>{formatDate(post.createdAt)}</p>
      <PostHeading as={typeTile}> {post.title}</PostHeading>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default DescribePost;
