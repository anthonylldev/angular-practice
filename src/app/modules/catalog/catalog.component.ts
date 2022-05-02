import { Component, OnInit } from '@angular/core';
import {IItem} from "../../core/interfaces/item.interface";
import {ItemService} from "../../core/services/item.service";
import {SimpleItem} from "../../core/models/simpleItem.model";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  items: IItem[] = [];
  title: string = "Most sales";

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
          const addItem: IItem = new SimpleItem(
            item.name, item.image, item.price, item.discount, item.favourite
          )
          this.items.push(addItem);
        })
      }
    )
  }
}
