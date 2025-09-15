'use server';

import { drizzleDb } from '@/db/drizzle';
import { logColor, simulateWait } from '@/utils/functions';

export async function deletePostAction(id: string) {
  await simulateWait(2000);

  logColor(id);

  return id;
}
