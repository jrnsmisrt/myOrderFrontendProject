import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from '../../service/item.service';
import {Item} from "../../model/Item";
import {Observable} from "rxjs";


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item$!: Observable<Item>;
  private id: string|any;


  constructor(private route: ActivatedRoute,private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.item$=this.itemService.getItemById(this.id);
  }

  get item(){
    return this.item$;
  }
  onEditItem(){
    this.router.navigate([`../items/edit/${this.id}`]);
  }
  onBack(){
    this.router.navigate(['../items']);
  }
}
