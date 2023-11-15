import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-price-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-details.component.html',
  styleUrl: './price-details.component.css'
})
export class PriceDetailsComponent implements OnInit {
  cartItems:any[]=[];
  cartItemsPrice:any;
  cartItemsDiscount:any;
  deliveryCharge:any;


  constructor(private cartservice:CartService){

  }

  ngOnInit(): void {
    this.cartItems = this.cartservice.getAllCartItems();
    this.getBillingDetails();
    this.cartservice.carSubject.subscribe((item:any)=>{
      this.cartItems=item;
      this.getBillingDetails();

    })
  }

  getBillingDetails(){
    let billingDetails = this.cartservice.getBilling(this.cartItems);
    this.cartItemsPrice = billingDetails.price;
    this.cartItemsDiscount= billingDetails.discount;
    this.deliveryCharge = billingDetails.delivery;
  }
}
