import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';

import { BOOKS } from '../../data/book-data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Book[] = BOOKS;

  constructor() {}

  ngOnInit() {}

  onSelect(book: Book): void {
    console.log('selected book', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   // what to do
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(book: Book): void {
    console.log('creating ', book);

    this.books.push(book);
  }
}
