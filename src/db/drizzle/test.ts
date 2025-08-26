import { eq } from 'drizzle-orm';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  await drizzleDb
    .update(postsTable)
    .set({ title: 'Dicas para manter a saúde mental em dia' })
    .where(eq(postsTable.slug, 'dicas-para-manter-a-saude-mental-em-dia'));
})();
