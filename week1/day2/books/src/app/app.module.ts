import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { TitleizePipe } from './titleize.pipe';

// TitleizePipe.skipWords = ['of'];

import * as fromBooks from './books';
import { SearchPipe } from './search.pipe';

import { BookService } from './services';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, ...fromBooks.books, TitleizePipe, SearchPipe, NavComponent],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
