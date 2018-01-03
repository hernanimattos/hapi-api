/* eslint-disable no-unused-vars */

exports.up = (knex, Promise) => knex.schema
  .alterTable('users', (usersTable) => {
    usersTable.string('age', 36).notNullable();
  });

exports.down = (knex, Promise) => {
  knex.schema
    .dropTableIfExists('users');
};
