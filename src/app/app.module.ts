import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { ItemGalleryComponent } from './item-gallery/item-gallery.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ItemService} from "./service/item.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateItemComponent } from './create-item/create-item.component';
import { CharacterCounterComponent } from './character-counter/character-counter.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { LastnameFilterPipe } from './pipes/lastname-filter.pipe';

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
    LastnameFilterPipe
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
  providers: [ItemService, CharacterCounterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
