import { env } from 'process';

export const appConfig = () => ({
  environment: env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT ?? '5342', 10) || 5432,
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    name: process.env.DATABASE_NAME || 'postgres',
    syncronize: process.env.DATABASE_SYNCRONIZE === 'true' ? true : false,
    autoLoadEntities:
      process.env.DATABASE_AUTOLOAD_ENTITIES === 'true' ? true : false,
  },
});
