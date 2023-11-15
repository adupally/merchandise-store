import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../../core/books.service';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  books1: any;
  isProductInCart: boolean[] = [];

  constructor(private bookservice: BooksService, private cartService: CartService) {}

  ngOnInit(): void {
    this.bookservice.getAllBooks().subscribe(
      (res) => {
        this.books1 = res;
        this.isProductInCart = Array(this.books1.books.length).fill(false);
      }
    );
  }

  addToCart(book: any, index: number) {
    this.cartService.addProductToCart(book);
    this.isProductInCart[index] = true;
  }
}
