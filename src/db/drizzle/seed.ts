import { JsonPostRepository } from '@/repositories/posts/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const json = new JsonPostRepository();
  const posts = await json.findAll();

  try {
    await drizzleDb.delete(postsTable); // essa função limpa antes de addicionar de novo só para testes
    await drizzleDb.insert(postsTable).values(posts);
  } catch (e) {
    console.log('');
    console.log('Ocorreu um erro', e);
    console.log(e);
    console.log('');
  }

  console.log(posts.length, ' posts foram salvos');
})();
