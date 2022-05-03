import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ISection} from "../../interfaces/section.interface";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient
  ) { }

  public getSections(): Observable<ISection[]> {
    const urlEndPoint: string = "http://localhost:3000/blog/sections";
    return this.http.get<ISection[]>(urlEndPoint);
  }
}
