import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  BookListComponent,
  BookNewComponent,
  BookDetailsComponent
} from './books';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        // redirectTo: 'list',
        // pathMatch: 'full'
        component: BookListComponent
      },
      // {
      //   path: 'list',
      //   component: BookListComponent
      // },
      {
        path: 'new',
        component: BookNewComponent
      },
      {
        path: ':book_id',
        component: BookDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
