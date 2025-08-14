import React from 'react';
import { Metadata } from 'next';

import { findBySlugCached } from '@/lib/posts/queries';

type PostPageType = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostPageType): Promise<Metadata> {
  const { slug } = await params;

  const post = await findBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

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
