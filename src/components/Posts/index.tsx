import React from 'react';
import MainPost from '../MainPost';
import SecondaryPosts from '../SecondaryPost';
import { findAllPublicPostsCached } from '@/lib/posts/queries/public';

export const dynamic = 'force-static';

const Posts = async () => {
  const posts = await findAllPublicPostsCached();
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
