
exports.up = (knex, Promise) => knex.schema
  .alterTable('games', (gamesTable) => {
    gamesTable.string('age', 36).notNullable();
  });

exports.down = (knex, Promise) => {
  knex.schema
    .dropTableIfExists('games');
};
