import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemGalleryComponent} from "../item-gallery/item-gallery.component";
import {CreateItemComponent} from "../create-item/create-item.component";

const routes: Routes=[
  { path: '', component: ItemGalleryComponent },
  {path: 'create-item', component: CreateItemComponent}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
