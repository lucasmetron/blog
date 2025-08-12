import { cache } from 'react';

import { postRepository } from '@/repositories/posts';

export const findAllPublicPosts = cache(async () => {
  return await postRepository.findAllPublic();
});

export const findBySlug = cache(async (slug: string) => {
  return await postRepository.findBySlug(slug);
});
