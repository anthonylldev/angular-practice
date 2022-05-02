import {Component, Input, OnInit} from '@angular/core';
import {IItem} from "../../../../core/interfaces/item.interface";
import {faHeart as faHeartSelected} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartUnselected} from "@fortawesome/free-regular-svg-icons";
import { registerLocaleData } from "@angular/common";
import localeES from '@angular/common/locales/es';

registerLocaleData(localeES);


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  faHeartSelected = faHeartSelected;
  faHeartUnselected = faHeartUnselected;
  @Input() simpleItem?: IItem

  constructor() { }

  ngOnInit(): void {
  }

  clickFavouriteIcon() {
    if (this.simpleItem) {
      this.simpleItem.favourite = !this.simpleItem.favourite
    }
  }

  isDiscounted(): boolean {
    return !!this.simpleItem?.discount;
  }
}
