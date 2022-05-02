import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {IImage} from "../../interfaces/image.iterface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
    private http: HttpClient
  ) { }


  public getImages(): Observable<IImage[]> {
    const urlEndPoint: string = "http://localhost:3000/home/carousel";
    return this.http.get<IImage[]>(urlEndPoint);
  }
}
