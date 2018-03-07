const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    publisher: String,
    pages: {
      type: Number,
      min: 1,
      required: true
    },
    year: Number
  },
  {
    timestamps: true
  }
);

// books
module.exports = mongoose.model('Book', bookSchema);
