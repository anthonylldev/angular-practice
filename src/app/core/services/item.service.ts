import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {IItem} from "../interfaces/item.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http: HttpClient
  ) { }


  public getSimpleItems(): Observable<IItem[]> {
    const urlEndPoint: string = "http://localhost:3000/catalog/simpleItems";
    return this.http.get<IItem[]>(urlEndPoint);
  }
}
