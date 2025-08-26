import React from 'react';
import { Metadata } from 'next';

import {
  findAllPublicPostsCached,
  findBySlugCached,
} from '@/lib/posts/queries';
import ImagePost from '@/components/ImagePost';
import PostHeading from '@/components/PostHeading';
import { formatDate } from '@/utils/functions';
import SafeMarkdown from '@/components/SafeMarkdown';

export const dynamicParams = true;
export const dynamic = 'force-static';

export async function generateStaticParams() {
  const post = await findAllPublicPostsCached();

  return post.map(p => ({ slug: p.slug }));
}

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

type PostPageType = {
  params: Promise<{ slug: string }>;
};

const Post = async ({ params }: PostPageType) => {
  const { slug } = await params;

  const post = await findBySlugCached(slug);

  return (
    <article className='w-full h-full flex flex-col gap-3'>
      <header className='h-[35vh] sm:h-[70vh] mt-[2rem] '>
        <ImagePost post={post} isPriority objectTypeImg='object-fill' />
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
