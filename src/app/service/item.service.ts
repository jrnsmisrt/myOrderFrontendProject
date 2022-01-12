import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemUrl: string;

  constructor(private http: HttpClient) {
    this.itemUrl : `${environment.backendUrl}+/items`;
  }

  getItems(): Observable<any>{
    return this.http.get<Item[]>(this.itemUrl)
      .pipe(map(response => response.sort(a: Item, b:Item)=>a.name.localCompare(b.name)));
  }
}
