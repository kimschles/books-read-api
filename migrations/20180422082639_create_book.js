exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', table => {
    table.increments('id');
    table.varchar('title');
    table.varchar('author');
    table.text('description');
    table.text('cover_image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book');
};
