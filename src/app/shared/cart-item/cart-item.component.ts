import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit {
  @Input() item:any;
  discountedPrice:any;
  itemPrice:any;
  constructor(private cartservice:CartService){

  }
  getPriceDetails(item:any){
    this.discountedPrice = this.cartservice.getPriceDetails(item).discountedPrice;
    this.itemPrice = this.cartservice.getPriceDetails(item).price;

  }
  ngOnInit(){

  }
  decItemCount(item:any){
    this.cartservice.decItemCount(item);
    this.getPriceDetails(item);
  }
  incItemCount(item:any){
    this.cartservice.incItemCount(item);
    this.getPriceDetails(item);

  }
  removeItem(item:any){
    this.cartservice.removeItem(item);

  }


}
