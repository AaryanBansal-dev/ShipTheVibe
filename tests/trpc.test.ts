import { appRouter } from '@/api/trpc';

describe('tRPC Router', () => {
  it('should return user with correct id', async () => {
    const caller = appRouter.createCaller({});
    const result = await caller.getUser('test-user-123');
    expect(result).toEqual({ id: 'test-user-123' });
  });
});
