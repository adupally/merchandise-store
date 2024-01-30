import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url = 'https://books-json.surge.sh/db.json'
  books:any[]=[];
  sortCriterion:any;
  sortSubject = new Subject();
  filteredBooks: any;
  constructor(private http:HttpClient) {
  }

  getAllBooks(){
    // console.log("stared to get the http")
    return this.http.get(this.url).pipe(map((book:any)=>{
      this.books = book;
      this.filteredBooks = this.books
      // console.log("filtered books in getall books",this.filteredBooks);
      // console.log(this.books);
      return book;

    }
    ));
  }

  getSortCriterion(criterion:any){
    // console.log("i am in books servicce criterion");
    this.sortCriterion = criterion;
    // console.log("i am setting subject ");
    this.sortSubject.next(this.sortCriterion)
  }

  sortBooks(criteria:any){
    // console.log("inside sort books");
    // console.log("criteria is : ",criteria)
    switch(criteria){
      case 'Price(low to High)':
        console.log("inside switch case")
        // console.log("inside switch case",this.filteredBooks)
        this.filteredBooks.sort((a:any,b:any)=>{
          if(a.price < b.price){
            console.log("Hello in if condition 1")
            return -1;
          }
          if (a.price > b.price){
            console.log("Hello in if condition 2")
            return 1
          }
          return 0
        });
        break;
    }
    console.log(this.filteredBooks);
    console.log("fileter completed");
    return this.filteredBooks;
  }

}
