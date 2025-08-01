import React from 'react';
import { getPosts } from './functions';
import MainPost from '../MainPost';
import SecondaryPost from '../SecondaryPost';

const Posts = async () => {
  const posts = await getPosts();
  const firsPost = posts[0];
  const anothersPosts = posts.slice(1);
  console.log('✌️posts --->', posts);

  return (
    <div className='flex flex-col gap-8 items-center justify-center'>
      <MainPost post={firsPost} />
      <SecondaryPost posts={anothersPosts} />
    </div>
  );
};

export default Posts;
