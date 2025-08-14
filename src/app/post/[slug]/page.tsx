import React from 'react';
import { Metadata } from 'next';

import { findBySlugCached } from '@/lib/posts/queries';
import ImagePost from '@/components/ImagePost';
import PostHeading from '@/components/PostHeading';
import { formatDate } from '@/utils/functions';
import SafeMarkdown from '@/components/SafeMarkdown';

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
    <article className='w-full h-full flex flex-col gap-1.5'>
      <header className='h-[55vh] mt-[2rem] '>
        <ImagePost post={post} isPriority />
      </header>

      <PostHeading>{post.title}</PostHeading>

      <p className='opacity-70'>
        {post.author} | {formatDate(post.createdAt)}
      </p>

      <p className='text-xl text-slate-600'>{post.excerpt}</p>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
};

export default Post;
