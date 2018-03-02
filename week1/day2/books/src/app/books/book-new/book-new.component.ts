import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { Book } from '../../book';
import { BookService } from '../../services';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit, OnDestroy {
  book: Book = new Book();
  sub: any;

  @Output() create: EventEmitter<Book> = new EventEmitter<Book>();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    console.log('submitted book', this.book);

    this.sub = this.bookService.createBook(this.book).subscribe(book => {
      // this.create.emit(book);
      // this.book = new Book();
      // form.reset();

      this.router.navigate(['/']);
    });

    // this.books.push(this.book);

    // console.log('books', this.books);
  }
}
