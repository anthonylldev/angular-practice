import {IItem} from "../interfaces/item.interface";
import {IImage} from "../interfaces/image.iterface";
import {TypeCategory} from "../enums/categories.enum";

export class Item implements IItem {
  id: number;
  name: string;
  categories: TypeCategory[];
  gender: string;
  image: IImage;
  imageXS: IImage;
  colors: string[];
  sizes: string[];
  price: number;
  discount?: number;
  favourite: boolean;


  constructor(id: number, name: string, category: TypeCategory[], gender: string, image: IImage, imageXS: IImage, colors: string[], sizes: string[], price: number, discount?: number, favourite?: boolean) {
    this.id = id;
    this.name = name;
    this.categories = category;
    this.gender = gender;
    this.image = image;
    this.imageXS = imageXS;
    this.colors = colors;
    this.sizes = sizes;
    this.price = price;
    this.discount = discount;
    this.favourite = favourite || false;
  }
}
