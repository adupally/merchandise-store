import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './shared/cart/cart.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { PriceDetailsComponent } from './shared/price-details/price-details.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';
import { ProductsComponent } from './shared/products/products.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { BooksService } from './core/books.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CartComponent,HeaderComponent,HomeComponent,PriceDetailsComponent,ProductDetailsComponent,ProductsComponent,SideNavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books:any

  constructor(private bookservice:BooksService){

  }
  ngOnInit(): void {
    console.log("in the ngonit main");
    this.bookservice.getAllBooks().subscribe((data)=>{
      this.books = data
      // console.log(this.books)
    })
    console.log("hello main")
  }
  title = 'merchandise-store';
}
