import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {CharacterCounterComponent} from "../character-counter/character-counter.component";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  createItemForm = this.formBuilder.group({

    name: '',
    description: new FormControl('',[
      Validators.required,
      Validators.maxLength(255),
    ]),
    price: '',
    amountOfStock: '',

  });


  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              public characterCounter: CharacterCounterComponent) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.itemService.createItem(this.createItemForm.value)
      .subscribe(item => {
          this.createItemForm.reset();
          this.router.navigate(['/items']);
        }
      );
  }

  onReset(): void {
    this.createItemForm.reset();
    this.router.navigate(['/items']);
  }

  countCharacters(): number {
    let input = this.createItemForm.get('description')?.value;
    return this.characterCounter.countCharactersLeft(input);
  }
}
