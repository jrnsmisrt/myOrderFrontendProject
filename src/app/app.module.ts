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
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule} from "@angular/forms";
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemGalleryComponent,
    NameFilterPipe,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    NgbModule,
    FormsModule,


  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
