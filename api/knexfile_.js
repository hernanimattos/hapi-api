module.exports = {
  dev: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: ' ',
      database: 'cms',
    },
    migrations: { tableName: 'app_migrations' },
    seeds: { tableName: './seeds' },
  },
};
