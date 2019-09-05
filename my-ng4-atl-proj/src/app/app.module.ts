import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

// page components
import { HomeComponent } from './comp/common/home.component';
import { UserHomeComponent } from './comp/user/userhome.component';
import { AdminHomeComponent } from './comp/admin/adminhome.component';

import { BookAddComponent } from './comp/book/book-add.component';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar.component';
import { BookListComponent } from './comp/book/book-list.component';
import { AppService } from './service/app.service';
import { BookService } from './service/books.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,    
    LoginComponent,    
    HomeComponent,
    UserHomeComponent,
    AdminHomeComponent,
    BookListComponent,
    BookAddComponent
  ],
  providers: [    
    AppService,
    BookService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

