import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ICategory} from "../../interfaces/category.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  public getImages(): Observable<ICategory[]> {
    const urlEndPoint: string = "http://localhost:3000/home/categories";
    return this.http.get<ICategory[]>(urlEndPoint);
  }
}
