import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allData: string = "https://api.pizzahut.io/v1/content/products?sector=in-1&locale=en-in";
  dealsData: string = "https://api.pizzahut.io/v2/products/deals?hutid=13289&sector=in-1&collection=true";

  constructor(private httpClient: HttpClient) { }

  public getAllData() {
    return this.httpClient.get(`${this.allData}`);
  }
  public getDealsPrice() {
    return this.httpClient.get(`${this.dealsData}`);
  }
}
