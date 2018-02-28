import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Book } from '../../book';
import { BookService } from '../../services';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output() create: EventEmitter<Book> = new EventEmitter<Book>();

  constructor(private bookService: BookService) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    console.log('submitted book', this.book);

    this.bookService.createBook(this.book).subscribe(book => {
      this.create.emit(book);
      this.book = new Book();
      form.reset();
    });

    // this.books.push(this.book);

    // console.log('books', this.books);
  }
}
