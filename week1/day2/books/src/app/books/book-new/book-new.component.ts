import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Book } from '../../book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output() create: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    console.log('submitted book', this.book);

    // this.books.push(this.book);
    this.create.emit(this.book);

    // console.log('books', this.books);
    this.book = new Book();
    form.reset();
  }
}
