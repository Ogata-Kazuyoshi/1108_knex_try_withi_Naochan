// expressのセットアップ
const express = require('express');
const app = express();
app.use(express.json());
// knexのセットアップ
const config = require('./knexfile');
const knex = require('knex')(config);

app.get('/', (req, res) => {
  res.status(200).send('Hello Node js');
});
// sampleデータベースのbooksテーブルから全てのデータを取得
app.get('/books', async (req, res) => {
  const booksList = await knex.select('*').from('books');
  res.status(200).send(booksList);
});
app.get('/orderbooks', async (req, res) => {
  const booksList = await knex.select('*').from('order_books');
  res.status(200).send(booksList);
});

app.post('/books', (req, res) => {
  // const {bookID: , bookTitle: , bookAuthor: , orderId: , orderPrice: , date_of_order: ,}
  const { bookID, bookTitle, bookAuthor, orderId, orderPrice, dateOfOrder } =
    req.body;
  const toBooks = {
    id: bookID,
    title: bookTitle,
    author: bookAuthor,
  };
  // const toOrderBooks = {
  //   id: orderId,
  //   // price: orderPrice,
  //   // data_of_order: dateOfOrder,
  //   book_id: bookID,
  // };

  // await knex('books').insert(toBooks);
  // await knex('order_books').insert({ id: 101, price: 500, book_id: 3 });
  return knex('books')
    .insert(toBooks)
    .then((elm) => {
      return knex('order_books')
        .insert({ id: 300, price: 500, book_id: 3 })
        .then((elm) => res.send('OK'));
    });
});

app.listen(5050, () => {
  console.log(`サーバーが立ち上がりました: http://localhost:3000`);
});
