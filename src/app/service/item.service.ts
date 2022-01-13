import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Item} from "../model/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemUrl: string;
  stockWarningImage: string;


  constructor(private http: HttpClient) {
    this.itemUrl = `${environment.backendUrl}/items`;
    this.stockWarningImage = '../../assets/images/icons/';
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this.itemUrl);

  }

  getItemById(id:string): Observable<any>{
    return this.http.get(`${this.itemUrl}/${id}`);
  }

  findItemByName(name: string): Observable<any> {
    return this.http.get<Item>(`${this.itemUrl}/${name}`);
  }

  createItem(item: Item) {
    return this.http.post(this.itemUrl, item);
  }

  updateItem(item: Item){
    return this.http.put(`${this.itemUrl}/${item.id}`, item);
  }


}

