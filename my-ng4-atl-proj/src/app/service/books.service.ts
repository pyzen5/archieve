import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppBook } from '../model/app.book';

@Injectable()
export class BookService {
  headers: Headers;
  options: RequestOptions;
  
  constructor(private http:Http) {
    this.headers = new Headers({ 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,PUT,POST,DELETE'
        });
    this.options = new RequestOptions({ headers: this.headers });
  }
  
  getAllBooks(){
    let people$ = this.http
      .request('../data/books.json')
      .map(res => res.json());
      return people$;
  }
  
  ////req: http://isbndb.com/api/v2/json/LWEDB8PK/book/9780849303159
  
  searchIsbndbById(bookIsbn:number): Promise<any>{
    let url = 'http://isbndb.com/api/v2/json/LWEDB8PK/book/'+bookIsbn;
    return this.http.get(url,this.options).toPromise().then(this.extractData).catch(this.handleError);
  }
  
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
