import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { BOOKS } from '../data/book-data';

import { Book } from '../book';

@Injectable()
export class BookService {
  private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(private http: Http) {}

  getBooks(): Observable<Book[]> {
    return this.http.get(this.base).map(response => response.json());
    // return Observable.of(BOOKS);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get(`${this.base}/${id}`).map(response => response.json());
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post(this.base, book).map(response => response.json());
  }

  removeBook(id: number): Observable<Book> {
    return this.http
      .delete(`${this.base}/${id}`)
      .map(response => response.json());
  }
}
