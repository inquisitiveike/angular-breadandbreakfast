import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {
  items = [];
  constructor(private http: HttpClient) { }

  getBreadPrices() {
    return this.http.get('/assets/breadPrices.json');
  }

  getBreakfastPrices() {
    return this.http.get('/assets/breakfastPrices.json');
  }

  getCakePrices() {
    return this.http.get('/assets/cakePrices.json');
  }

  getCookiePrices() {
    return this.http.get('/assets/cookiePrices.json');
  }

  getCupcakePrices() {
    return this.http.get('/assets/cupcakePrices.json');
  }

  getPiePrices() {
    return this.http.get('/assets/piePrices.json');
  }

  getSconePrices() {
    return this.http.get('/assets/sconePrices.json');
  }

}