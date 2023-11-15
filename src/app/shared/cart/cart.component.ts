import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../core/cart.service';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { PriceDetailsComponent } from '../price-details/price-details.component';

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [CommonModule, RouterModule, CartItemComponent,PriceDetailsComponent]
})
export class CartComponent implements OnInit {
  cartItems:any[]=[];
  constructor(private cartservice:CartService){

  }
  ngOnInit(): void {
    this.cartItems = this.cartservice.getAllCartItems();
  }

}
