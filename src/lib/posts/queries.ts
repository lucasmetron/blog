import { cache } from 'react';
import { notFound } from 'next/navigation';

import { postRepository } from '@/repositories/posts';

export const findAllPublicPostsCached = cache(async () => {
  return await postRepository.findAllPublic();
});

export const findBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlugPublic(slug).catch(() => null);
  if (!post) {
    notFound();
  }
  return post;
});

export const findByIdCached = cache(async (slug: string) => {
  return await postRepository.findById(slug);
});
