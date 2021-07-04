export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    url: process.env.POSTGRES_URL,
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '1111',
    port: process.env.DB_PORT || 5432,
    synchronize: process.env.DB_SYNCHRONIZE || true,
    database: process.env.DB_NAME || 'nest-test',
  },
});
