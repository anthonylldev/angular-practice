import { Component, OnInit } from '@angular/core';
import {TypeCategory} from "../../../../core/enums/categories.enum";
import {IItem} from "../../../../core/interfaces/item.interface";
import {ItemService} from "../../../../core/services/item/item.service";
import {SimpleItem} from "../../../../core/models/simpleItem.model";

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.scss']
})
export class JeansComponent implements OnInit {

  title: string = TypeCategory["jeans"]
  items: IItem[] = [];

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.loadSimpleItems();
  }

  private loadSimpleItems(): void {
    this.itemService.getSimpleItems().subscribe(
      (data) => {
        data.forEach((item) => {
          if (item.categories.indexOf(TypeCategory["jeans"]) > -1) {
            const addItem: IItem = new SimpleItem(
              item.id, item.name, item.categories, item.gender, item.image, item.price, item.discount, item.favourite
            )
            this.items.push(addItem);
          }
        })
      }
    )
  }

}
