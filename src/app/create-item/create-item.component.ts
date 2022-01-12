import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  createItemForm = this.formBuilder.group({

    name: '',
    description: '',
    price: '',
    amountOfStock: '',

  });

  maxLengthDescription : number;

  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {

    this.maxLengthDescription = 255;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.itemService.createItem(this.createItemForm.value)
      .subscribe(pet => {
          this.createItemForm.reset();
          this.router.navigate(['/items']);
        }
      );
  }

  onReset(): void{
    this.createItemForm.reset();
    this.router.navigate(['/items']);
  }

}
