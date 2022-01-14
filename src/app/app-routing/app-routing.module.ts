import {NgModule} from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';
import {ItemGalleryComponent} from "../item/item-gallery/item-gallery.component";
import {CreateItemComponent} from "../item/create-item/create-item.component";
import {ItemDetailComponent} from "../item/item-detail/item-detail.component";
import {EditItemComponent} from "../item/edit-item/edit-item.component";
import {CustomerOverviewComponent} from "../customer/customer-overview/customer-overview.component";
import {CreateCustomerComponent} from "../customer/create-customer/create-customer.component";

const routes: Routes = [
  {path: '', component: ItemGalleryComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'items', component: ItemGalleryComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'items/edit/:id', component: EditItemComponent},
  {path: 'customers', component: CustomerOverviewComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
