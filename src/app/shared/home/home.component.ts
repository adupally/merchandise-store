import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ProductsComponent } from '../products/products.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,HeaderComponent,SideNavComponent,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(){

  }


  ngOnInit(): void {
  }
}