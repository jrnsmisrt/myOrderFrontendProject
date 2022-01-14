import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerUrl: string;

  constructor(private http: HttpClient) {
    this.customerUrl = `${environment.backendUrl}/customers`;
  }

  getCustomers():Observable<any>{
    return this.http.get<Customer[]>(this.customerUrl);
  }

  findItemByLastName(lastName: string): Observable<any> {
    return this.http.get<Customer>(`${this.customerUrl}/${lastName}`);
  }


}
