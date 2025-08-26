'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function revalidateExampleAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Estou em uma server action', path);

  revalidatePath(`${path}`);
  revalidateTag('posts');
  revalidateTag('post-rotina-matinal-de-pessoas-altamente-eficazes');
  revalidateTag('post-dicas-para-manter-a-saude-mental-em-dia');
}
