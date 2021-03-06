import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { ItemGalleryComponent } from './item/item-gallery/item-gallery.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ItemService} from "./service/item.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateItemComponent } from './item/create-item/create-item.component';
import { CharacterCounterComponent } from './character-counter/character-counter.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { EditItemComponent } from './item/edit-item/edit-item.component';
import { CustomerOverviewComponent } from './customer/customer-overview/customer-overview.component';
import { LastnameFilterPipe } from './pipes/lastname-filter.pipe';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import {CustomerService} from "./service/customer.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemGalleryComponent,
    NameFilterPipe,
    CreateItemComponent,
    CharacterCounterComponent,
    ItemDetailComponent,
    EditItemComponent,
    CustomerOverviewComponent,
    LastnameFilterPipe,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [ItemService, CustomerService,CharacterCounterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
