import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { TitleizePipe } from './titleize.pipe';

// TitleizePipe.skipWords = ['of'];

import * as fromBooks from './books';
import { SearchPipe } from './search.pipe';

import { BookService, AuthService } from './services';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.books,
    TitleizePipe,
    SearchPipe,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
