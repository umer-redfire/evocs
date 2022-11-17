import { createGraphQLHandler } from '@redwoodjs/graphql-server';

import directives from 'src/directives/**/*.{js,ts}';
import sdls from 'src/graphql/**/*.sdl.{js,ts}';
import { getCurrentUser } from 'src/lib/auth';
import { db } from 'src/lib/db';
import { logger } from 'src/lib/logger';
import services from 'src/services/**/*.{js,ts}';

export const handler = createGraphQLHandler({
  getCurrentUser,
  loggerConfig: { logger, options: { query: true } },
  directives,
  sdls,
  services,
  depthLimitOptions: { maxDepth: 6 },
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  },
});
