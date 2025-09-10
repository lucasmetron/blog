import { cache } from 'react';
import { postRepository } from '@/repositories/posts';

export const findPostByIdAdmin = cache(async (slug: string) => {
  return await postRepository.findById(slug);
});

export const findAllPostsAdmin = cache(async () => {
  return await postRepository.findAll();
});
