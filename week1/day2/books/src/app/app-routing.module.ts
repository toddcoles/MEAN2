import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  BookListComponent,
  BookNewComponent,
  BookDetailsComponent
} from './books';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
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
