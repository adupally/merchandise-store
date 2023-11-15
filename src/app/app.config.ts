import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BooksService } from './core/books.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './core/cart.service';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),BooksService,importProvidersFrom(HttpClientModule),CartService]
};
