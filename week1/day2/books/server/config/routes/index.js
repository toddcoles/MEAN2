const router = require('express').Router();
const bookRouter = require('./book.routes');

// /books/:id

module.exports = router.use('/books', bookRouter);
