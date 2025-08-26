import { cache } from 'react';
import { notFound } from 'next/navigation';

import { postRepository } from '@/repositories/posts';
import { unstable_cache } from 'next/cache';

export const findAllPublicPostsCached = unstable_cache(
  cache(async () => {
    return await postRepository.findAllPublic();
  }),
  ['posts'],
  { tags: ['posts'] },
);

export const findBySlugCached = (slug: string) =>
  unstable_cache(
    cache(async (slug: string) => {
      const post = await postRepository
        .findBySlugPublic(slug)
        .catch(() => null);
      if (!post) {
        notFound();
      }
      return post;
    }),
    [`post-${slug}`],
    { tags: [`post-${slug}`] },
  )(slug);

export const findByIdCached = cache(async (slug: string) => {
  return await postRepository.findById(slug);
});
