import {IImage} from "./image.iterface";
import {TypeCategory} from "../enums/categories.enum";

export interface IItem {
  id: number;
  name: string;
  categories: TypeCategory[];
  gender: string;
  price: number;
  discount?: number;
  image: IImage;
  favourite: boolean;
}
