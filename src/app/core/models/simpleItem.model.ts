import {IItem} from "../interfaces/item.interface";
import {IImage} from "../interfaces/image.iterface";
import {TypeCategory} from "../enums/categories.enum";

export class SimpleItem implements IItem{
  id: number;
  name: string;
  image: IImage;
  price: number;
  categories: TypeCategory[];
  gender: string;
  discount?: number;
  favourite: boolean;

  constructor(id: number, name: string, category: TypeCategory[], gender: string, image: IImage, price: number, discount?: number, favourite?: boolean) {
    this.id = id;
    this.name = name;
    this.categories = category;
    this.gender = gender;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.favourite = favourite || false;
  }
}
