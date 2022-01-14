import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "../model/Customer";

@Pipe({
  name: 'lastNameFilter'
})
export class LastnameFilterPipe implements PipeTransform {

  transform(customers: Customer[], searchText: string): any[] {
    let lowerCaseSearchLastName = searchText.toLowerCase();

    return customers.filter(customer=>{
      return customer.lastname.toLowerCase().startsWith(lowerCaseSearchLastName);
    });
  }

}
