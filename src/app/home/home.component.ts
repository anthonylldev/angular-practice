import { Component, OnInit } from '@angular/core';
import {CarouselService} from "../core/services/carousel.service";
import {Base64Image} from "../core/models/base64.model";
import {IImage} from "../core/interfaces/image.iterface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: IImage[] = [];

  constructor(
    private carouselService: CarouselService
  ) {
  }

  ngOnInit(): void {
    this.getImages()
  }

  private getImages(): void {
    this.carouselService.getImages().subscribe(
      (data) => {
        data.forEach((img) => {
          const addImage: IImage = new Base64Image(img.src, img.alt);
          this.images.push(addImage);
        })
      }
    )
  }
}
