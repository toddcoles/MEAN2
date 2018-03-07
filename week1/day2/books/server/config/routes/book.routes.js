const bookController = require('../../controllers/books');
const router = require('express').Router();

// /books

// /books/sadkfjhaslkdjfhaskljdfh
module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .put('/:id', bookController.update)
  .get('/:id', bookController.show)
  .delete('/:id', bookController.destroy);
