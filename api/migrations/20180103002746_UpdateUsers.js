/* eslint-disable no-unused-vars */

exports.up = (knex, Promise) => {
  knex.schema
    .alterTable('users', (usersTable) => {
      usersTable.dropColumn('age');
    });
};
exports.down = (knex, Promise) => {
  knex.schema
    .dropTableIfExists('users');
};
