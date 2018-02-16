import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: Book = new Book();
  books: Array<Book> = [];

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    console.log('submitted book', this.book);

    this.books.push(this.book);

    console.log('books', this.books);
    this.book = new Book();
    form.reset();
  }
}
