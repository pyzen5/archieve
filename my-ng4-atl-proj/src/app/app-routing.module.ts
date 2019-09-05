import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './comp/common/home.component'
import { UserHomeComponent }        from './comp/user/userhome.component'
import { AdminHomeComponent }        from './comp/admin/adminhome.component'
import { BookListComponent }        from './comp/book/book-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'userHome',  component: UserHomeComponent },
  { path: 'adminHome',  component: AdminHomeComponent },
  { path: 'books',  component: BookListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
