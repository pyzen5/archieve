import { Component }                          from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'add-book',
    templateUrl: './book-add.component.html'
  })
export class BookAddComponent {
    bookForm: FormGroup;    
  
    constructor(private fb: FormBuilder) {
      this.createForm();
    }
  
    createForm() {
      this.bookForm = this.fb.group({
        title: ['', Validators.required ],
        genre: '',
        author: '',        
        thumbnail: '',
        isbn: '',
        description: '',
        rating: '',
        quantity: '',
        availabilty: false
      });
    }

    fileChange(event:any){
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];

        }
    }
  }
