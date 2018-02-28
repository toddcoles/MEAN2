import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';

import { TitleizePipe } from '../../titleize.pipe';
import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe]
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Book[] = [];
  filter: Book = new Book(false);
  errorMessage: string;

  constructor(
    private bookService: BookService,
    private titleize: TitleizePipe
  ) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
      this.books.forEach(book => {
        book.author = this.titleize.transform(book.author);
      });
    });
  }

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

  clearFilter(): void {
    console.log('clearing filter');
    this.filter = new Book(false);
  }

  onDelete(id: number): void {
    console.log('deleting book', id);

    this.bookService.removeBook(id).subscribe(
      removedBook => {
        console.log('removed book', removedBook);
        this.books = this.books.filter(book => book.id !== id);
      },
      error => {
        console.log('error response', error);
        this.errorMessage = error.json();

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      }
    );
  }

  onEvent(event: Event): void {
    event.stopPropagation();
  }
}
