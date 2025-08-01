import { posts } from '@/db/seed/posts.json';

export async function getPosts() {
  await new Promise<void>(resolve => {
    setTimeout(() => {
      resolve(); // Aqui resolvemos a Promise depois de 1 segundo
    }, 1000);
  });

  return posts;
}
