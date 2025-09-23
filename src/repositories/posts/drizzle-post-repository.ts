import { PostType } from '@/Types/PostType';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { formatDate, logColor, simulateWait } from '@/utils/functions';
import { WAIT_TIME_SIMULATE_MS } from '@/lib/constants';
import { postsTable } from '@/db/drizzle/schemas';
import { eq } from 'drizzle-orm';
export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostType[]> {
    await simulateWait(WAIT_TIME_SIMULATE_MS, true);

    logColor('findAllPublic', formatDate(Date.now()));
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (post, { desc }) => desc(post.createdAt),
      where: (post, { eq }) => eq(post.published, true),
    });
    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostType> {
    await simulateWait(WAIT_TIME_SIMULATE_MS, true);

    logColor('findBySlugPublic', formatDate(Date.now()));
    const post = await drizzleDb.query.posts.findFirst({
      where: (post, { eq, and }) =>
        and(eq(post.slug, slug), eq(post.published, true)),
    });

    if (!post) throw new Error('Post não encontrado');

    return post;
  }

  async findAll(): Promise<PostType[]> {
    await simulateWait(WAIT_TIME_SIMULATE_MS, true);

    logColor('findAll', formatDate(Date.now()));
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (post, { desc }) => desc(post.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostType> {
    await simulateWait(WAIT_TIME_SIMULATE_MS, true);

    logColor('findById', formatDate(Date.now()));
    const post = await drizzleDb.query.posts.findFirst({
      where: (post, { eq }) => eq(post.id, id),
    });

    if (!post) throw new Error('Post não encontrado pelo ID');

    return post;
  }

  async deleteById(id: string): Promise<boolean> {
    let resp = false;
    await drizzleDb
      .delete(postsTable)
      .where(eq(postsTable.id, id))
      .then(() => {
        resp = true;
      })
      .catch(() => {
        resp = false;
      });

    return resp;
  }
}
