/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('order_books').del();
  await knex('order_books').insert([
    { id: 1, price: 1000, date_of_order: '2023-11-01', book_id: 1 },
    { id: 2, price: 2000, date_of_order: '2023-11-02', book_id: 2 },
    { id: 3, price: 3000, date_of_order: '2023-11-03', book_id: 2 },
  ]);
};
