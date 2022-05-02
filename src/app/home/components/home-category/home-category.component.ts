import {Component, Input, OnInit} from '@angular/core';
import {ICategory} from "../../../core/interfaces/category.interface";

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit {
  @Input() category?: ICategory;

  constructor() {
  }

  ngOnInit(): void {
  }
}
