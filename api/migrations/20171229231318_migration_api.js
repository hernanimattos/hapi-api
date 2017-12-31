
exports.up = (knex, Promise) => knex.schema
  .createTable('users', (usersTable) => {
    usersTable.increment();
    usersTable.string('login', 100).notNullable().unique();
    usersTable.string('email', 200).notNullable().unique();
    usersTable.string('password', 100).notNullable();
    usersTable.string('name', 100).notNullable();
    usersTable.string('guid', 40).notNullable().unique();
    usersTable.timestamp('create_at', 100).notNullable();
  })

  .createTable('games', (gamesTable) => {
    gamesTable.increment();
    gamesTable.string('owner', 100).references('guid').inTable('users');
    gamesTable.string('name', 250).notNullable();
    gamesTable.string('category', 250).notNullable();
    gamesTable.string('img', 250).notNullable();
    gamesTable.string('age', 36).notNullable().unique();
    gamesTable.boolean('isPublic').notNullable().defaultTo(true);
    gamesTable.timestamp('created_at').notNullable();
  });

exports.down = (knex, Promise) =>
  knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('games');

