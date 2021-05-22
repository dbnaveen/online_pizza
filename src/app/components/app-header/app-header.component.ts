import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AllDataService } from "../../services/all-data.service";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppHeaderComponent implements OnInit {
  products: any[] = [];
  sidenav: boolean = false;
  constructor(private AllDataService: AllDataService) { }

  onclickCart() {
    this.sidenav = true;
    this.AllDataService.showCartNav();
  }

  ngOnInit(): void {
    this.AllDataService.getCart.subscribe(res => {
      this.products = res;
    });
  }

}
