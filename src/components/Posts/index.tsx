import React from 'react';
import { getPosts } from './functions';
import MainPost from '../MainPost';
import SecondaryPost from '../SecondaryPost';

const Posts = async () => {
  const posts = await getPosts();
  console.log('✌️posts --->', posts);

  return (
    <div>
      <MainPost post={posts[0]} />
      <SecondaryPost />
    </div>
  );
};

export default Posts;
