
exports.up = (knex, Promise) => knex.schema
  .alterTable('games', (gamesTable) => {
    gamesTable.string('guid', 36).notNullable().unique();
  });

exports.down = (knex, Promise) => {
  knex.schema
    .dropTableIfExists('games');
};
