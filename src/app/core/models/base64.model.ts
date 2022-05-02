import {IImage} from "../interfaces/image.iterface";

export class Base64Image implements IImage{
  src: string;
  alt: string;

  constructor(src: string, alt: string) {
    this.src = src;
    this.alt = alt;
  }
}
