import {IItem} from "../interfaces/item.interface";
import {IImage} from "../interfaces/image.iterface";

export class SimpleItem implements IItem{
  id: number;
  name: string;
  image: IImage;
  price: number;
  discount?: number;
  favourite: boolean;

  constructor(id: number, name: string, image: IImage, price: number, discount?: number, favourite?: boolean) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.favourite = favourite || false;
  }
}
