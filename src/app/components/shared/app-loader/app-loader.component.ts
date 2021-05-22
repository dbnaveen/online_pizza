import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { delay } from "rxjs/operators";
import { LoaderService } from "../../../services/loader.service";
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppLoaderComponent implements OnInit {
  isLoading: boolean;
  color = "primary";
  // mode = "indeterminate";
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor(private loaderService: LoaderService) {
    this.isLoading = false;
  }

  ngOnInit(): void {
    // this.loaderService.cast.pipe(delay(0)).subscribe(res => {
    //   this.isLoading = res;
    // });
  }

}
