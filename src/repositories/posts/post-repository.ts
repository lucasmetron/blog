import { PostType } from '@/Types/PostType';

export interface PostRepository {
  findAllPublic(): Promise<PostType[]>;
  findAll(): Promise<PostType[]>;
  findById(id: string): Promise<PostType>;
  findBySlugPublic(slug: string): Promise<PostType>;
}
