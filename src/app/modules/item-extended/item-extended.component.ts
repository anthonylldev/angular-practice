import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../core/services/item/item.service";
import {Item} from "../../core/models/item.model";
import {faEnvelope, faHeart} from "@fortawesome/free-regular-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faTwitter, faFacebookF, faPinterestP} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-item-extended',
  templateUrl: './item-extended.component.html',
  styleUrls: ['./item-extended.component.scss']
})
export class ItemExtendedComponent implements OnInit {
  idItem?: number;
  item?: Item;
  colorSelected: string = 'Choose color';
  sizeSelected: string = 'Choose size';
  faShoppingCart = faShoppingCart;
  faEnvelope = faEnvelope;
  faHeart = faHeart;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faPinterestP = faPinterestP;

  staticSizes: string[] = [
    "3xs",
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl"
  ]

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.idItem = Number(this.route.snapshot.paramMap.get('idItem') ?? undefined)
    this.loadItem();
  }

  loadItem(): void {
    this.itemService.getItems().subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.id === this.idItem) {
            this.item = new Item(
              item.id,
              item.name,
              item.image,
              item.imageXS,
              item.colors,
              item.sizes,
              item.price,
              item.discount,
              item.favourite
            )
          }
        })

        console.log(this.item?.imageXS.src)
      }
    )
  }

  isDiscounted(): boolean {
    return !!this.item?.discount;
  }

  isSizeAvailable(size: string) {
    return this.item?.sizes.find(s => s === size) != undefined;
  }

  changeColor(color: string) {
    this.colorSelected = color;
  }

  changeSize(size: string) {
    if (this.item?.sizes.find(s => s === size) != undefined) {
      this.sizeSelected = size;
    }
  }
}
