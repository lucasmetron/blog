'use server';

import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { postRepository } from '@/repositories/posts';
import { logColor } from '@/utils/functions';
import { eq } from 'drizzle-orm';

export async function deletePostAction(id: string) {
  //TODO:Checar login do usuário
  let respFunction = {
    error: '',
  };

  if (!id || typeof id !== 'string') {
    respFunction.error = 'ID inválido.';
    return respFunction;
  }

  const post = await postRepository.findById(id).catch(() => undefined);

  if (!post) {
    respFunction.error = 'Post não existe.';
    return respFunction;
  }

  const isSuccessTodelete = await postRepository.deleteById(id);

  if (!isSuccessTodelete) {
    respFunction.error = 'Erro ao deletar o post.';
  }

  logColor(id);

  return respFunction;
}
