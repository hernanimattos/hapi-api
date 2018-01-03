
exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          login: 'Hernani mattos',
          email: 'hernani@email.com',
          password: 123456,
          name: 'Hernani',
          guid: 'f03ede7c-b121-4112-bcc7-130a3e87988a',
        },
        {
          id: 2,
          login: 'Juiana Bueno',
          email: 'juliana@email.com',
          password: '123456',
          name: 'Juliana',
          guid: 'f03ede7c-b121-4112-bcc7-130a3e87988b',
        },
        {
          id: 3,
          login: 'Luca',
          email: 'luca@email.com',
          password: 123456,
          name: 'Luca',
          guid: 'f03ede7c-b121-4112-bcc7-130a3e87988c',
        },
      ]));
};
