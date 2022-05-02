import {IItem} from "../interfaces/item.interface";
import {IImage} from "../interfaces/image.iterface";

export class Item implements IItem {
  id: number;
  name: string;
  image: IImage;
  imageXS: IImage;
  colors: string[];
  sizes: string[];
  price: number;
  discount?: number;
  favourite: boolean;


  constructor(id: number, name: string, image: IImage, imageXS: IImage, colors: string[], sizes: string[], price: number, discount?: number, favourite?: boolean) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.imageXS = imageXS;
    this.colors = colors;
    this.sizes = sizes;
    this.price = price;
    this.discount = discount;
    this.favourite = favourite || false;
  }
}
