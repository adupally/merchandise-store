import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/cart.service';
import { RouterModule } from '@angular/router';

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
criteria:any[]=["Price(low to High)"]

  constructor(private cartservice:CartService){

  }
  ngOnInit(){
    this.cartservice.carSubject.subscribe((cartItems:any)=>{
      this.cartItemCount = cartItems.length;
    });
  }


}
