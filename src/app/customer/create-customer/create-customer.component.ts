import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";



@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  complete:string='';
  createCustomerForm = this.formBuilder.group({
    firstname: new FormControl('',[
    Validators.required,
      Validators.minLength(2)
    ]),
    lastname: new FormControl('',[
      Validators.required,
      Validators.minLength(2)
    ]),
    email: new FormGroup({
      localPart:new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      domain: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      complete: new FormControl('',[
        Validators.required,
        Validators.min(2),
        Validators.email
      ]),
    }),
    address: new FormGroup( {
      streetName: new FormControl('',[
        Validators.required,
        Validators.min(2)
      ]),
      houseNumber: new FormControl('',[
        Validators.required,
        Validators.min(2)
      ]),
      postalCode: new FormControl('',[
        Validators.required,
        Validators.min(0),
        Validators.max(9999)
      ]),
      country:new FormControl('',[
        Validators.required
      ]),
    }),
    phoneNumber: new FormGroup({
      countryCallingCode: new FormControl(''),
      number: new FormControl(''),
    })
  })

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              ) {

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.complete=`${this.createCustomerForm.get('email.localPart')?.value}@${this.createCustomerForm.get('email.domain')?.value}`;
    this.createCustomerForm.get('email.complete')?.patchValue(this.complete);
    this.customerService.createCustomer(this.createCustomerForm.value)
      .subscribe(customer => {
          this.createCustomerForm.reset();
          this.router.navigate(['/customers']);
        }
      );
  }

  getFormAttribute(attribute: string): any{
    return this.createCustomerForm.get(`${attribute}`);
  }
}
