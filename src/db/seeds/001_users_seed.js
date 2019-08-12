const { User } = require('../../backend/models');
console.log('Users', User);
exports.seed = (knex, Promise) =>
  knex(User.tableName)
    .del()
    .then(() => [
      {
        username: 'admin',
        password: 'password',
        email: 'admin@email.com',
      },
      {
        username: 'first-user',
        password: 'another-password',
        email: 'first-user@email.com',
      },
    ])
    .then(newUsers => Promise.all(newUsers.map(user => User.create(user))))
    .catch(err => console.log('err: ', err));
