import React from 'react';
import MainPost from '../MainPost';
import SecondaryPosts from '../SecondaryPost';
import { findAllPublicPosts } from '@/lib/posts/queries';

const Posts = async () => {
  const posts = await findAllPublicPosts();
  const firsPost = posts.length > 0 ? posts[0] : undefined;
  const anothersPosts = posts.length > 0 ? posts.slice(1) : [];

  return (
    <div className='flex flex-col gap-[1.5rem] items-center justify-center sm:gap-8'>
      <MainPost post={firsPost} />
      <SecondaryPosts posts={anothersPosts} />
    </div>
  );
};

export default Posts;
