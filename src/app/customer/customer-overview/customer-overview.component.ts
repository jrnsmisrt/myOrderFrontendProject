import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {
  customers: Customer[]=[];
  searchText: string;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(customers => this.customers=customers);
  }

  findItemByLastName(lastName: string){
    this.customerService.findItemByLastName(lastName);
  }

}
