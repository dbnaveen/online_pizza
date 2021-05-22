import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../app/services/data.service";
import { AllDataService } from "../../services/all-data.service";
import *  as  pricejson from '../../../assets/json/price.json';
import *  as  alldatajson from '../../../assets/json/alldata.json';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-app-deals',
  templateUrl: './app-deals.component.html',
  styleUrls: ['./app-deals.component.scss']
})
export class AppDealsComponent implements OnInit {
  allData: any;
  dealsData: any;
  allDataObj = {};
  selectedProduct = [];
  priceData: any = (pricejson as any).default;
  globalData: any = (alldatajson as any).default;
  prodQuantity = {};
  constructor(private UtilitityService: DataService, private AllDataService: AllDataService, private snackBar: MatSnackBar) { }

  getAllData() {
    this.AllDataService.cast.subscribe(res => {
      if (res.length > 0) {
        this.allData = res;
        this.getDealsPrice();
      }
    });
  }

  getDealsPrice() {
    this.UtilitityService.getDealsPrice().subscribe(
      res => {
        this.dealsData = res;
        this.getFinalData();
      },
      error => {
        alert("No Data to Display");
      }
    );
  }

  getFinalData() {
    for (var i = 0; i < this.allData.length; i++) {
      const id = this.allData[i].id;
      this.allDataObj[id] = this.allData[i];
    }
  }

  onClickAddToCart(product, price) {
    product["price"] = price["price"]
    product["quantity"] = price["selectedQty"]

    this.AllDataService.maxProdValue.subscribe(res => {
      this.prodQuantity = JSON.parse(JSON.stringify(res));
    });

    if (this.prodQuantity[price['id']] === undefined) {
      this.prodQuantity[price['id']] = price.selectedQty;
      this.addToCart(product);
    } else {
      if (this.prodQuantity[price['id']] + price.selectedQty > 4) {
        this.showError();
      } else {
        if (this.prodQuantity[price['id']] >= 4) {
          alert("Cannot Add");
        } else {
          this.prodQuantity[price['id']] = this.prodQuantity[price['id']] + price.selectedQty;
          this.addToCart(product);
        }
      }

    }
  }

  showError() {
    this.snackBar.open("Cannot add more then 4 products", " ", {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: "center",
      panelClass: ['error-snack']
    });
  }

  addToCart(product) {
    this.AllDataService.updateCart(product);
    this.AllDataService.updateMaxProd(this.prodQuantity);

    this.snackBar.open("Added to cart", " ", {
      duration: 1000,
      verticalPosition: 'bottom',
      horizontalPosition: "center"
    });
  }

  ngOnInit(): void {
  }

}
