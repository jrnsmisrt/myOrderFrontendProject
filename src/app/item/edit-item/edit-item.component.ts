import {Component, OnInit} from '@angular/core';
import {mergeMap, Observable, tap} from "rxjs";
import {Item} from "../../model/Item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../service/item.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CharacterCounterComponent} from "../../character-counter/character-counter.component";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item$!: Observable<Item>;
  item!: Observable<Item>
  private id: string | any;

  editItemForm = this.formBuilder.group({

    name: new FormControl(``, [
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    description: new FormControl(``, [
      Validators.maxLength(255),
    ]),
    price: new FormControl(``, [
      Validators.min(0),
    ]),
    amountOfStock: new FormControl(``, [
      Validators.min(0),
    ])

  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService,
              private formBuilder: FormBuilder,
              public characterCounter: CharacterCounterComponent) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.item = this.route.params.pipe(
      mergeMap(param=>this.itemService.getItemById(param['id'])),
      tap(item=>this.editItemForm.patchValue(item)));

  }
getItem(){
    return this.item;
}


  onUpdate() {
    this.itemService.updateItem(this.id,this.editItemForm.value)
      .subscribe(item =>
        this.router.navigate([`../items/${this.id}`])
      );
  }

  onCancel() {
    this.router.navigate([`../items/${this.id}`]);
  }

  getFormAttribute(attribute: string): any{
    return this.editItemForm.get(`${attribute}`);
  }
  countCharacters(): number {
    let input = this.editItemForm.get('description')?.value;
    return this.characterCounter.countCharactersLeft(input);
  }

  countColor():boolean{
    if(this.countCharacters()>0){
      return true;
    }
    return false;
  }
}
