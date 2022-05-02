import {IImage} from "../interfaces/image.iterface";

export class Base64Image implements IImage{
  src: string;
  alt: string;

  constructor(base64: string, alt: string) {
    this.src = base64;
    this.alt = alt;
  }

  public getSrc(): string {
    return this.src;
  }

  public getAlt(): string {
    return this.alt;
  }
}
