import { Component, OnInit } from '@angular/core';
import {IItem} from "../../core/interfaces/item.interface";
import {ItemService} from "../../core/services/item/item.service";
import {SimpleItem} from "../../core/models/simpleItem.model";
import {TypeCategory} from "../../core/enums/categories.enum";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  title: string = "Most sales";
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
          if (item.categories.indexOf(TypeCategory["most-sales"]) > -1) {
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
