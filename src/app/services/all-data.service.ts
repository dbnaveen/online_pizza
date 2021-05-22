import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllDataService {
  /**
   * 1. Create the variable that we are going to share.
   */
  private allData = new BehaviorSubject<Array<any>>([]);

  /**
   * Make it as observable so that we can monitor/observe the changes from anywhere.
   */
  cast = this.allData.asObservable();

  /**
   * To Update the variable
   */
  fetchallData(newUser) {
    /**
     * next method will replace the value of the allData
     */
    this.allData.next(newUser);
  }

  private cartProducts = new BehaviorSubject<any[]>([]);
  getCart = this.cartProducts.asObservable();
  updateCart(product) {
    if (Object.entries(product).length === 0) {
      this.cartProducts.next([]);
    } else {
      this.cartProducts.next([...this.cartProducts.getValue(), ...[JSON.parse(JSON.stringify(product))]]);
    }
  }

  /**
   * Manage cart navbar globally
   */
  private cartNav = new BehaviorSubject<boolean>(false);
  cartNavValue = this.cartNav.asObservable();
  showCartNav() {
    this.cartNav.next(true);
  }
  hideCartNav() {
    this.cartNav.next(false);
  }

  /**
   * Manage Maximum Product globally
   */
  private maxProd = new BehaviorSubject<object>({});
  maxProdValue = this.maxProd.asObservable();
  updateMaxProd(prod) {
    if (Object.entries(prod).length === 0) {
      this.maxProd.next({});
    } else {
      this.maxProd.next(prod);
    }
  }

  constructor() { }
}
