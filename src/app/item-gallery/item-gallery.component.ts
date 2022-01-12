import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../model/Item";
@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.css']
})
export class ItemGalleryComponent implements OnInit {
  items: Item[] = [];
  searchText: string;


  constructor(private itemService: ItemService) {
    this.searchText='';
  }

  ngOnInit(): void {
    this.getItems();

  }
  getItems(){
    this.itemService.getItems().subscribe(items => this.items = items);

  }
  findItemByName(searchText:string){
    this.itemService.findItemByName(searchText);
  }


}
