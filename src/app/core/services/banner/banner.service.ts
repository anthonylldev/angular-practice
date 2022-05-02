import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IImage} from "../../interfaces/image.iterface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private http: HttpClient
  ) { }


  public getImages(): Observable<IImage[]> {
    const urlEndPoint: string = "http://localhost:3000/home/banner";
    return this.http.get<IImage[]>(urlEndPoint);
  }
}
