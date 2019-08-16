exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id');
    table
      .integer('user_id')
      .references('users.id')
      .unsigned()
      .index()
      .onDelete('CASCADE');
    table.string('title');
    table.text('description', 'mediumtext');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleter_at');
  });
};

exports.down = knex => {
  return knex.schema.dropTable('tasks');
};
