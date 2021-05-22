import { Component, OnInit } from '@angular/core';
import { DataService } from "../app/services/data.service";
import { AllDataService } from "./services/all-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private UtilitityService: DataService, private AllDataService: AllDataService) { }

  loadDealsData() {
    this.UtilitityService.getAllData().subscribe(
      res => {
        this.AllDataService.fetchallData(res);
      },
      error => {
        alert("No Data to Display");
      }
    );
  }

  ngOnInit(): void {
    // this.loadDealsData();
  }
}
