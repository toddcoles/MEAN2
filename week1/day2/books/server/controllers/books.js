const Book = require('mongoose').model('Book');

module.exports = {
  index(request, response) {
    console.log('grabbing books from server');
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(console.log);
  },
  update(request, response) {},
  show(request, response) {},
  destroy(request, response) {}
};
