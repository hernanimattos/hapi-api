
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() =>
      // Inserts seed entries
      knex('users').insert([
        {
          id: 1,
          login: 'Hernani mattos',
          email: 'hernani@email.com',
          password: 123456,
          name: 'Hernani',
          guid: 1298361374,
          create_at: new Date(),
        },
        {
          id: 2,
          login: 'Juiana Bueno',
          email: 'juliana@email.com',
          password: '123456',
          name: 'Juliana',
          guid: 1298563274,
          create_at: new Date(),
        },
        {
          id: 3,
          login: 'Luca',
          email: 'luca@email.com',
          password: 123456,
          name: 'Luca',
          guid: 1298564274,
          create_at: new Date(),
        },
      ]));
};
