import { cache } from 'react';
import { HealthSchema, type Health } from '@saas-kit/schemas';
import { publicFetcher } from '@/lib/fetcher';

export const getHealth = cache(async (): Promise<Health | null> => {
  try {
    const { data } = await publicFetcher.get('/health', {
      validateStatus: () => true,
    });
    const result = HealthSchema.safeParse(data);

    return result.success ? result.data : null;
  } catch {
    return null;
  }
});
