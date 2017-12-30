// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'api',
      user: 'root',
      password: '',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'api',
      user: 'root',
      password: ' ',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'api_migrations',
    },
  },

  production: {
    client: 'localhost',
    connection: {
      database: 'api',
      user: 'root',
      password: '',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'api_migrations',
    },
  },
};
