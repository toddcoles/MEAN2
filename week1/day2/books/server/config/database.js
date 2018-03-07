const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server/models');

mongoose.connect('mongodb://localhost/books_and_more_books');
mongoose.connection.on('connected', () => console.log('mongodb connected'));

// version 4.x or below
mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(model => {
  if (reg.test(model)) {
    require(path.join(modelsPath, model));
  }
});
