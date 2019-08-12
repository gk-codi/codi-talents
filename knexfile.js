// ref: https://devhints.io/knex
module.exports = {
  development: {
    client: 'pg',
    connection: 'gabykaram://localhost:5432/knex-test',
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/db/seeds`,
    },
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
