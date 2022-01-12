import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { ItemGalleryComponent } from './item-gallery/item-gallery.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

import {ItemService} from "./service/item.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ItemGalleryComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    NgbModule,


  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
