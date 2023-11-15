import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://books-json.surge.sh/db.json'
  books:any[]=[];
  constructor(private http:HttpClient) {
  }

  getAllBooks(){
    console.log("stared to get the http")
    return this.http.get(this.url).pipe(map((book:any)=>{
      this.books = book;
      // console.log(this.books);
      return this.books;

    }
    ));
  }
}
