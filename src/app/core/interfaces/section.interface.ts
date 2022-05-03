import {IImage} from "./image.iterface";

export interface ISection {
  title: string;
  description: string;
  date: string;
  image: IImage[]
}
