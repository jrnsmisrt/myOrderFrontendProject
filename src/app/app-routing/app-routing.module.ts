import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemGalleryComponent} from "../item-gallery/item-gallery.component";

const routes: Routes=[
  { path: '', component: ItemGalleryComponent }
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
