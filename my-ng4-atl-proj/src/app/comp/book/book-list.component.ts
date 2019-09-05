import { Component }    from '@angular/core';
import { AppBook }      from '../../model/app.book'    
import { BookService }  from '../../service/books.service';
@Component({
  selector: 'books-comp',
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
    
    isbnId:any
    constructor(private _bookService: BookService) { }  
    
    searchId(){
        console.log('hELLO'+this.isbnId)
        this._bookService.searchIsbndbById(this.isbnId).then(function(data){
            console.log(data)
        })
    }
       
    books = [
        {
            "title":"Aurangzeb",
            "thumbnail":"assets/books/aurangzeb.jpeg",
            "description":"some text about title"
        },
        {
            "title":"Complete Maus",
            "thumbnail":"assets/books/complete-maus.jpeg",
            "description":"some text about title"
        },
        {
            "title":"Playing It",
            "thumbnail":"assets/books/playing-it.jpeg",
            "description":"some text about title"
        },
        {
            "title":"Scion of Ikshvaku",
            "thumbnail":"assets/books/scion-of-ikshvaku.jpeg",
            "description":"some text about title"
        },
        {
            "title":"The Ivory Throne",
            "thumbnail":"assets/books/the-ivory-throne.jpeg",
            "description":"some text about title"
        },
        {
            "title":"The Ivory Throne",
            "thumbnail":"assets/books/the-ivory-throne.jpeg",
            "description":"some text about title"
        },
        {
            "title":"The Ivory Throne",
            "thumbnail":"assets/books/the-ivory-throne.jpeg",
            "description":"some text about title"
        },
        {
            "title":"Wonder",
            "thumbnail":"assets/books/wonder.jpeg",
            "description":"some text about title"
        }
    ]
}
