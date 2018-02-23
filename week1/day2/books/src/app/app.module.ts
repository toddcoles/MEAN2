import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TitleizePipe } from './titleize.pipe';

// TitleizePipe.skipWords = ['of'];

import * as fromBooks from './books';

@NgModule({
  declarations: [AppComponent, ...fromBooks.books, TitleizePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
