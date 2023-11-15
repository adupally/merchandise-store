import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts:any[]=[];
  carSubject=new Subject();

  constructor() { }
  addProductToCart(product:any){
    let currentBook ={...product,count:1};
    this.cartProducts.push(currentBook);
    this.carSubject.next(this.cartProducts);

  }
  getAllCartItems(){
    return this.cartProducts
  }

  getPriceDetails(product:any){
    let priceDetails={
      discountedPrice: (product.price * product.count) - (product.discount) / 100 * (product.price * product.count),
      price: product.price * product.count
    };
    return priceDetails;
  }
  decItemCount(product:any){

    let index = this.cartProducts.findIndex((item) =>{
      return item.isbn === product.isbn;
    });
    this.cartProducts[index].count--;
    this.getPriceDetails(product);
    this.carSubject.next(this.cartProducts);
  }
  incItemCount(product:any){
    let index = this.cartProducts.findIndex((item) =>{
      return item.isbn === product.isbn;
    });
    this.cartProducts[index].count++;
    this.getPriceDetails(product);
    this.carSubject.next(this.cartProducts);

  }
  removeItem(product:any){
    let removeConfirm = window.confirm("Are You Sure you wanna Remove");
    if(removeConfirm){
      let index = this.cartProducts.findIndex((item) =>{
        return item.isbn === product.isbn;
      });
      this.cartProducts.splice(index,1);
      this.carSubject.next(this.cartProducts);
    }
  }


  getBilling(cartItems:any){
    let billingDetails ={
      price:0,
      discount:0,
      delivery:0
    }
    cartItems.forEach((item:any)=>{
      billingDetails.price = billingDetails.price + (item.price * item.count);
      billingDetails.discount = billingDetails.discount + ((item.discount / 100 * item.price) *item.count);
      billingDetails.price >= 1500 ? billingDetails.delivery = 0 : billingDetails.delivery=50;
    });
    return billingDetails;
  }
}
