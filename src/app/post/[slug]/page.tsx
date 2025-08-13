import React from 'react';
import type { Metadata } from 'next';

import { findBySlugCached } from '@/lib/posts/queries';

type PostPageType = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: 'aqui',
};

const Post = async ({ params }: PostPageType) => {
  const { slug } = await params;

  const post = await findBySlugCached(slug);

  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
};

export default Post;
