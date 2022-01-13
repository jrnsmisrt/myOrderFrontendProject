import {Component, OnInit} from '@angular/core';
import {map, mergeMap, Observable, tap} from "rxjs";
import {Item} from "../model/Item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../service/item.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item$!: Observable<Item>;
  item!: Observable<Item>
  private id: string | any;
  name!: string;
  description!: string;
  price!: number;
  amountOfStock!: number;

  editItemForm = this.formBuilder.group({

    name: new FormControl(`${this.name}`, [
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    description: new FormControl(`${this.description}`, [
      Validators.maxLength(255),
    ]),
    price: new FormControl(`${this.price}`, [
      Validators.min(0),
    ]),
    amountOfStock: new FormControl(`${this.amountOfStock}`, [
      Validators.min(0),
    ])

  });
  // setFormValues(){
  //  this.item.subscribe(item=>{this.name=item.name, console.log(this.name)});
  //
  //
  //   this.item.subscribe((item)=>{this.description=item.description , console.log(this.description)});
  //   this.item.subscribe((item)=>this.price=item.price);
  //   this.item.subscribe((item)=>this.amountOfStock=item.amountOfStock);
  // }

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.item = this.route.params.pipe(
      mergeMap(param=>this.itemService.getItemById(param['id'])),
      tap(item=>this.editItemForm.patchValue(item)));

    // this.item$ = this.itemService.getItemById(this.id);
    // this.setFormValues();
  }
getItem(){
    return this.item;
}


  onUpdate() {
    this.itemService.updateItem(this.editItemForm.value)
      .subscribe(item =>
        this.router.navigate([`../items/${this.id}`])
      );
  }

  onCancel() {
    this.router.navigate([`../items/${this.id}`]);
  }

}
