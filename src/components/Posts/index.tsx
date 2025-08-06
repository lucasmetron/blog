import React from 'react';
import { postRepository } from '@/repositories/posts';
import MainPost from '../MainPost';
import SecondaryPost from '../SecondaryPost';

const Posts = async () => {
  const posts = await postRepository.findAll();
  const firsPost = posts.length > 0 ? posts[0] : undefined;
  const anothersPosts = posts.length > 0 ? posts.slice(1) : [];

  return (
    <div className='flex flex-col gap-8 items-center justify-center'>
      <MainPost post={firsPost} />
      <SecondaryPost posts={anothersPosts} />
    </div>
  );
};

export default Posts;
