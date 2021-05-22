import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./interceptors/loader.interceptor";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppDealsComponent } from './components/app-deals/app-deals.component';
import { MaterialModule } from "./material.module";
import 'hammerjs';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppLoaderComponent } from './components/shared/app-loader/app-loader.component';
import { AppCartComponent } from './components/app-cart/app-cart.component';
import { AppAdminComponent } from './components/app-admin/app-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppDealsComponent,
    AppFooterComponent,
    AppLoaderComponent,
    AppCartComponent,
    AppAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
