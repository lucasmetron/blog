import { PostType } from '@/Types/PostType';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';

export class DrizzlePostRepository implements PostRepository {
  private async readFromDB(): Promise<PostType[]> {
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (post, { desc }) => desc(post.createdAt),
      // where: (post, {eq})=> eq(post.published, true), se fosse necessário filtrar por publicados
    });
    return posts;
  }

  async findAllPublic(): Promise<PostType[]> {
    const posts = (await this.readFromDB()).filter(post => post.published);
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostType> {
    const posts = await this.readFromDB();
    const post = posts.find(post => post.slug === slug);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }

  async findAll(): Promise<PostType[]> {
    const posts = await this.readFromDB();
    return posts;
  }

  async findById(id: string): Promise<PostType> {
    const posts = await this.readFromDB();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }
}
