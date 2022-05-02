import {Component, OnInit} from '@angular/core';
import {CarouselService} from "../core/services/carousel/carousel.service";
import {Base64Image} from "../core/models/base64.model";
import {IImage} from "../core/interfaces/image.iterface";
import {ICategory} from "../core/interfaces/category.interface";
import {CategoryService} from "../core/services/category/category.service";
import {HomeCategory} from "../core/models/homeCategory.model";
import {BannerService} from "../core/services/banner/banner.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselImages: IImage[] = [];
  bannerImages: IImage[] = [];
  categories: ICategory[] = [];

  constructor(
    private carouselService: CarouselService,
    private categoryService: CategoryService,
    private bannerService: BannerService
  ) {
  }

  ngOnInit(): void {
    this.loadCarousel();
    this.loadCategories();
    this.loadBanner();
  }

  private loadCarousel(): void {
    this.carouselService.getImages().subscribe(
      (data) => {
        data.forEach((img) => {
          const addImage: IImage = new Base64Image(img.src, img.alt);
          this.carouselImages.push(addImage);
        })
      }
    )
  }

  private loadBanner(): void {
    this.bannerService.getImages().subscribe(
      (data) => {
        data.forEach((img) => {
          const addImage: IImage = new Base64Image(img.src, img.alt);
          this.bannerImages.push(addImage);
        })
      }
    )
  }

  private loadCategories(): void {
    this.categoryService.getImages().subscribe(
      (data) => {
        data.forEach((category) => {
          const addCategory: ICategory = new HomeCategory(category.categoryTitle, category.image);
          this.categories.push(addCategory);
        })
      }
    )
  }
}
