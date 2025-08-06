import { PostType } from '@/Types/PostType';

export interface PostRepository {
  findAll(): Promise<PostType[]>;
  findById(id: string): Promise<PostType>;
}
