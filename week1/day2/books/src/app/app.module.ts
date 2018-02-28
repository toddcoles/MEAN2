import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TitleizePipe } from './titleize.pipe';

// TitleizePipe.skipWords = ['of'];

import * as fromBooks from './books';
import { SearchPipe } from './search.pipe';

import { BookService } from './services';

@NgModule({
  declarations: [AppComponent, ...fromBooks.books, TitleizePipe, SearchPipe],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
