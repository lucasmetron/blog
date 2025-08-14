import { PostType } from '@/Types/PostType';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATCH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);
const WAIT_TIME_SIMULATE_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (WAIT_TIME_SIMULATE_MS <= 0) return;

    await new Promise(resolve => {
      setTimeout(resolve, WAIT_TIME_SIMULATE_MS);
    });
  }

  private async readFromDisk(): Promise<PostType[]> {
    await this.simulateWait();

    const jsonContent = await readFile(JSON_POST_FILE_PATCH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;

    return posts;
  }

  async findAllPublic(): Promise<PostType[]> {
    const posts = (await this.readFromDisk()).filter(post => post.published);
    return posts;
  }

  async findById(id: string): Promise<PostType> {
    const posts = await this.readFromDisk();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }

  async findBySlug(slug: string): Promise<PostType> {
    const posts = await this.readFromDisk();
    const post = posts.find(post => post.slug === slug);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }
}
