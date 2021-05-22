import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppDealsComponent } from "./components/app-deals/app-deals.component";
import { AppAdminComponent } from "./components/app-admin/app-admin.component";

const routes: Routes = [
  {
    path: "store",
    component: AppDealsComponent,
    data: { title: "Store" }
  },
  {
    path: "admin",
    component: AppAdminComponent,
    data: { title: "Admin" }
  },
  { path: "", redirectTo: "/store", pathMatch: "full" },
  { path: "**", redirectTo: "/store", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
