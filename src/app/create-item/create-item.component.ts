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

    name: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    description: new FormControl('',[

      Validators.maxLength(255),
    ]),
    price: new FormControl('',[
      Validators.required,
      Validators.min(0),
      ]),
    amountOfStock: new FormControl('',[
      Validators.required,
      Validators.min(0),
    ])

  });

  counterColor: string = 'greenyellow';

  validatorErrorMessage: string;


  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              public characterCounter: CharacterCounterComponent) {
    this.validatorErrorMessage = '';

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
    if(input.length===0) this.counterColor="red";
    return this.characterCounter.countCharactersLeft(input);
  }

  countColor():boolean{
    if(this.countCharacters()>0){
      return true;
    }
    return false;
  }

  getFormAttribute(attribute: string): any{
    return this.createItemForm.get(`${attribute}`);
  }

  getErrorMessageForValidation(formAttribute: string): string{
    let attribute=this.getFormAttribute(formAttribute);
    let error = attribute.errors.error;


    switch(error){
      case 'maxLength': this.validatorErrorMessage = `You have exceeded the maximum allowed characters (${this.characterCounter.maxLengthCharacters})`; break;
      case 'required': this.validatorErrorMessage = `input field is required`; break;
      case 'min' : this.validatorErrorMessage = 'Value must be bigger than or equal to 0'; break;

    }

    return this.validatorErrorMessage;
  }
}
