import { Component, OnInit } from '@angular/core';
import { AllDataService } from "../../services/all-data.service";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['./app-cart.component.scss']
})
export class AppCartComponent implements OnInit {
  model: any;
  products: any[] = [];
  maxProducts: any = {};

  constructor(private AllDataService: AllDataService) { }

  toggleCart() {
    this.AllDataService.hideCartNav();
  }

  getProductsAdded() {
    this.AllDataService.getCart.subscribe(res => {
      this.products = res;
    });
  }

  getMaxProducts() {
    this.AllDataService.maxProdValue.subscribe(res => {
      this.maxProducts = res;
    });
  }

  get totalPrice() {
    var sum = 0;
    for (var i = 0; i < this.products.length; i++) {
      sum = sum + this.products[i].price * this.products[i].quantity;
    }
    return sum;
  }

  get grandTotal() {
    const sum = this.totalPrice + 29;
    return sum;
  }

  cancelItem(product, index) {
    this.maxProducts[product.id] = this.maxProducts[product.id] - product.quantity;
    this.AllDataService.updateMaxProd(this.maxProducts);
    this.products.splice(index, 1);
  }

  onClearCart() {
    this.products = [];
    this.maxProducts = {};
    this.AllDataService.updateCart({});
    this.AllDataService.updateMaxProd({});
  }

  ngOnInit(): void {
    this.AllDataService.cartNavValue.subscribe(res => {
      this.model = res;
    });
    this.getProductsAdded();
    this.getMaxProducts();
  }

}
