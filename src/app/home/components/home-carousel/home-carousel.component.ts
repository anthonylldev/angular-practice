import {Component, Input, OnInit} from '@angular/core';
import {IImage} from "../../../core/interfaces/image.iterface";

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {
  @Input() images?: IImage[];

  constructor() {
  }

  ngOnInit() {
  }
}
