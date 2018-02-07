// Update with your config settings.

module.exports = {


	development: {

		Migrations: {tableName: 'api_migrations'},
		seeds: {tableName: './seeds'},

		client: 'mysql',
		connection: {

			host: '127.0.0.1',

			user: 'root',
			password: '',

			database: 'api',
			charset: 'utf8',

		}

	}

//
/*
 *   Production: {
 *     client: 'localhost',
 *     connection: {
 *       database: 'api',
 *       user: 'root',
 *       password: '',
 *     },
 *     pool: {
 *       min: 2,
 *       max: 10,
 *     },
 *     migrations: {
 *       tableName: 'api_migrations',
 *     },
 *   },
 */
};
