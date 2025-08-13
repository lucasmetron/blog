import { cache } from 'react';

import { postRepository } from '@/repositories/posts';

export const findAllPublicPostsCached = cache(async () => {
  return await postRepository.findAllPublic();
});

export const findBySlugCached = cache(async (slug: string) => {
  return await postRepository.findBySlug(slug);
});
