import {NgModule} from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';
import {ItemGalleryComponent} from "../item-gallery/item-gallery.component";
import {CreateItemComponent} from "../create-item/create-item.component";
import {ItemDetailComponent} from "../item-detail/item-detail.component";
import {EditItemComponent} from "../edit-item/edit-item.component";

const routes: Routes = [
  {path: '', component: ItemGalleryComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: 'items', component: ItemGalleryComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path: 'items/edit/:id', component: EditItemComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
