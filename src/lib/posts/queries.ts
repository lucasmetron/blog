import { cache } from 'react';

import { postRepository } from '@/repositories/posts';

export const findAllPublicPosts = cache(async () => {
  return await postRepository.findAllPublic();
});
