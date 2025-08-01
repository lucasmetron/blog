import { posts } from '@/db/seed/posts.json';

export type PostType = {} & (typeof posts)[0];
