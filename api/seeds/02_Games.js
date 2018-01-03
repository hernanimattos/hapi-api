
exports.seed = (knex, Promise) =>
  knex('games').del()
    .then(() => knex('games').insert([
      {
        owner: 'f03ede7c-b121-4112-bcc7-130a3e87988a',
        category: 'Rpg',
        name: 'Good of war',
        img: '',
        guid: '4c8d84f1-9e41-4e78-a254-0a5680cd19d5',
        age: '22',
        isPublic: true,
      },
      {
        owner: 'f03ede7c-b121-4112-bcc7-130a3e87988b',
        category: 'Action',
        name: 'Call of dutty',
        img: '',
        guid: 'ddb8a136-6df4-4cf3-98c6-d29f6da4fbc6',
        age: '22',
        isPublic: false,
      },
      {
        owner: 'f03ede7c-b121-4112-bcc7-130a3e87988c',
        category: 'Action',
        name: 'Need for speed',
        img: '',
        guid: 'ddb8a136-6df4-4cf3-98c6-d29f6da4fbc6',
        age: '22',
        isPublic: false,
      },
    ]));

