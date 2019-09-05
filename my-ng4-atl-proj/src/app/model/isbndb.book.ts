//req: http://isbndb.com/api/v2/json/LWEDB8PK/book/9780849303159

export class isbnbookauthor{
    "id" : string;
    "name" : string;
}

export class isbnBook{
         "subject_ids" : Array<string>;
         "language" : string;
         "title" : string;
         "isbn13" : string;
         "title_long" : string;
         "book_id" : string;
         "dewey_normal" : string;
         "dewey_decimal" : string;
         "publisher_id" : string;
         "urls_text" : string;
         "publisher_name" :string;
         "title_latin" : string;
         "isbn10" : string;
         "marc_enc_level" : string;
         "notes" : string;
         "lcc_number" : string;
         "summary" : string;
         "author_data" : isbnbookauthor[];
         "publisher_text" : string;
         "edition_info" : string;
         "awards_text" : string;
}
