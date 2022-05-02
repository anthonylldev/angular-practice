import {IImage} from "./image.iterface";

export interface IItem {
  id: number;
  name: string;
  price: number;
  discount?: number;
  image: IImage;
  favourite: boolean;
}
