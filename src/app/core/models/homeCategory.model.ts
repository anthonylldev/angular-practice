import {ICategory} from "../interfaces/category.interface";
import {IImage} from "../interfaces/image.iterface";

export class HomeCategory implements ICategory{
  categoryTitle: string;
  image: IImage;

  constructor(categoryTitle: string, image: IImage) {
    this.categoryTitle = categoryTitle;
    this.image = image;
  }
}
