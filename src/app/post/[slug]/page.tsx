import { findBySlug } from '@/lib/posts/queries';
import React from 'react';

type PostType = {
  params: Promise<{ slug: string }>;
};

const Post = async ({ params }: PostType) => {
  const { slug } = await params;
  const post = await findBySlug(slug);

  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;
