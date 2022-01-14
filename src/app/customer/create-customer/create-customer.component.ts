import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  mailLocalPart:string='';
  mailDomain:string='';

  createCustomerForm= this.formBuilder.group({
    firstname: '',
    lastname:'',
    mail:'',
    address:'',
    phoneNumber:'',
  })

  constructor(private customerService:CustomerService,
              private route:ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.customerService.createCustomer(this.createCustomerForm.value)
      .subscribe(customer => {
          this.createCustomerForm.reset();
          this.router.navigate(['/customers']);
        }
      );
  }

}
