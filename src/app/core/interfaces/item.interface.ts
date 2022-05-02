import {IImage} from "./image.iterface";

export interface IItem {
  name: string;
  price: number;
  discount?: number;
  image: IImage;
  favourite: boolean;
}
