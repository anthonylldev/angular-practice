import { Component, OnInit } from '@angular/core';
import {TypeCategory} from "../../../../core/enums/categories.enum";
import {IItem} from "../../../../core/interfaces/item.interface";
import {ItemService} from "../../../../core/services/item/item.service";
import {SimpleItem} from "../../../../core/models/simpleItem.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-jackets',
  templateUrl: './jackets.component.html',
  styleUrls: ['./jackets.component.scss']
})
export class JacketsComponent implements OnInit {
  title: string = TypeCategory["jackets"]
  items: IItem[] = [];
  gender?: string;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getGender()
    this.loadSimpleItems();
  }

  private loadSimpleItems(): void {
    this.itemService.getSimpleItems().subscribe(
      (data) => {
        data.forEach((item) => {
          if (this.gender) {
            if (item.categories.indexOf(TypeCategory["jackets"]) > -1 && this.gender == item.gender) {
              const addItem: IItem = new SimpleItem(
                item.id, item.name, item.categories, item.gender, item.image, item.price, item.discount, item.favourite
              )
              this.items.push(addItem);
            }
          } else  {
            if (item.categories.indexOf(TypeCategory["jackets"]) > -1) {
              const addItem: IItem = new SimpleItem(
                item.id, item.name, item.categories, item.gender, item.image, item.price, item.discount, item.favourite
              )
              this.items.push(addItem);
            }
          }
        })
      }
    )
  }


  getGender(): void {
    this.gender = this.route.snapshot.paramMap.get('gender') ?? undefined;
  }

}
