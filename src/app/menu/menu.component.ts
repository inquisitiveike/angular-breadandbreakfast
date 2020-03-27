import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  breadCosts;
  breakfastCosts;
  cakeCosts;
  cookieCosts;
  cupcakeCosts;
  pieCosts;
  sconeCosts;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.breadCosts = this.menuService.getBreadPrices();
    this.breakfastCosts = this.menuService.getBreakfastPrices();
    this.cakeCosts = this.menuService.getCakePrices();
    this.cookieCosts = this.menuService.getCookiePrices();
    this.cupcakeCosts = this.menuService.getCupcakePrices();
    this.pieCosts = this.menuService.getPiePrices();
    this.sconeCosts = this.menuService.getSconePrices();
  }

}