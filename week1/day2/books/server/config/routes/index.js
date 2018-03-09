const router = require('express').Router();
const bookRouter = require('./book.routes');
const authRouter = require('./auth');

// /books/:id

module.exports = router.use('/books', bookRouter).use('/auth', authRouter);

// /auth/login
