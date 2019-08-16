exports.up = knex => {
  return knex.schema.createTable('projects', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    table
      .integer('user_id')
      .references('users.id')
      .unsigned()
      .index()
      .onDelete('CASCADE');
    table.string('name');
    table.text('description');
    table.timestamp('completed_at');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = knex => {
  return knex.schema.dropTable('projects');
};
