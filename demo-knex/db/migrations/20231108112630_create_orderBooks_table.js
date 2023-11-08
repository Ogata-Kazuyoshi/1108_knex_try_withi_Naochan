/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('orderBooks', function (table) {
    table.increments('id').primary();
    table.float('price', 32, 2);
    table.date('date_of_order');
    table.integer('book_id').references('books.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('orderBooks');
};
