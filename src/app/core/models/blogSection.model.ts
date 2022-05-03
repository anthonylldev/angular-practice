import {ISection} from "../interfaces/section.interface";
import {IImage} from "../interfaces/image.iterface";

export class BlogSection implements ISection {
  title: string;
  description: string;
  date: string;
  image: IImage[];


  constructor(title: string, description: string, date: string, image: IImage[]) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.image = image;
  }
}
