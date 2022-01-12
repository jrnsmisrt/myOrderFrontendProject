import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../model/Item";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  createItemForm = this.formBuilder.group({
    id:'string',
    name: 'string',
    description: 'string',
    price: 'number',
    amountOfStock: 'number',
    stockUrgency: 'string',
  });
  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.itemService.createItem(this.createItemForm.value)
      .subscribe(pet => {
          this.createItemForm.reset();
          this.itemService.getItems();
        }
      );


  }

}
