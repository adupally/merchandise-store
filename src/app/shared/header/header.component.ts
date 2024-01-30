import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/cart.service';
import { RouterModule } from '@angular/router';
import { BooksService } from '../../core/books.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  searchText:String="";
  cartItemCount:any;
  isSortMenuVisible:boolean=false;
  books1:any;
  criteria:any[]=["Price(low to High)","Price(High to Low)","Hello"]

  constructor(private cartservice:CartService,private bookservice:BooksService){

  }
  ngOnInit(){
    this.cartservice.carSubject.subscribe((cartItems:any)=>{
      this.cartItemCount = cartItems.length;
    });
  }

  showSortMenu(){
    this.isSortMenuVisible=!this.isSortMenuVisible;

  }
  sortBooks(criterion:any){  
    // console.log("hello called criterion");
    console.log(criterion);
    this.bookservice.getSortCriterion(criterion);
  }

}
