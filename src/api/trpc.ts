import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  getUser: t.procedure
    .input(z.string())
    .query((opts) => {
      return { id: opts.input }; // Replace with real user retrieval logic
    }),
});

export type AppRouter = typeof appRouter;
