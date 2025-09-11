import React from 'react';

import { findAllPostsAdmin } from '@/lib/posts/queries/admin';

const PostListAdmin = async () => {
  const listPost = await findAllPostsAdmin();

  return (
    <div>
      {listPost.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
      <h1>{listPost[0].title}</h1>
    </div>
  );
};

export default PostListAdmin;
