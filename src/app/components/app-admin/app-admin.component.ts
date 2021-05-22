import { Component, OnInit } from '@angular/core';
import *  as  dealsjson from '../../../assets/json/deals.json';
import *  as  alldatajson from '../../../assets/json/alldata.json';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.scss']
})
export class AppAdminComponent implements OnInit {
  dealsData: any = (dealsjson as any).default;
  globalData: any = (alldatajson as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
