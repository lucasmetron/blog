import { PostType } from '@/Types/PostType';

export interface PostRepository {
  findAllPublic(): Promise<PostType[]>;
  findById(id: string): Promise<PostType>;
  findBySlug(slug: string): Promise<PostType>;
}
