import React from 'react';
import { notFound } from 'next/navigation';

import { findBySlugCached } from '@/lib/posts/queries';
import { PostType } from '@/Types/PostType';

type PostPageType = {
  params: Promise<{ slug: string }>;
};

const Post = async ({ params }: PostPageType) => {
  const { slug } = await params;

  let post: null | PostType = null;

  try {
    post = await findBySlugCached(slug);
  } catch {
    notFound();
  }

  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;
